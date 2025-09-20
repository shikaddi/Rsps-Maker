package com.jagex.entity.model;

import com.jagex.io.Buffer;

public class Mesh317 extends Mesh {

	public Mesh317(byte[] data) {

		Buffer buffer = new Buffer(data);
		buffer.setPosition(data.length - 18);
		ModelHeader header = new ModelHeader();
		header.setData(data);
		header.setVertices(buffer.readUShort());
		header.setFaceCount(buffer.readUShort());
		header.setTexturedFaceCount(buffer.readUByte());

		int useTextures = buffer.readUByte();
		int useFacePriority = buffer.readUByte();
		int useTransparency = buffer.readUByte();
		int useFaceSkinning = buffer.readUByte();
		int useVertexSkinning = buffer.readUByte();
		int xDataOffset = buffer.readUShort();
		int yDataOffset = buffer.readUShort();
		int zDataOffset = buffer.readUShort();
		int faceDataLength = buffer.readUShort();

		int offset = 0;
		header.setVertexDirectionOffset(offset);
		offset += header.getVertices();

		header.setFaceTypeOffset(offset);
		offset += header.getFaceCount();

		header.setFacePriorityOffset(offset);

		if (useFacePriority == 255) {
			offset += header.getFaceCount();
		} else {
			header.setFacePriorityOffset(-useFacePriority - 1);
		}

		header.setFaceSkinOffset(offset);
		if (useFaceSkinning == 1) {
			offset += header.getFaceCount();
		} else {
			header.setFaceSkinOffset(-1);
		}

		header.setTexturePointerOffset(offset);
		if (useTextures == 1) {
			offset += header.getFaceCount();
		} else {
			header.setTexturePointerOffset(-1);
		}

		header.setVertexSkinOffset(offset);
		if (useVertexSkinning == 1) {
			offset += header.getVertices();
		} else {
			header.setVertexSkinOffset(-1);
		}

		header.setFaceAlphaOffset(offset);
		if (useTransparency == 1) {
			offset += header.getFaceCount();
		} else {
			header.setFaceAlphaOffset(-1);
		}

		header.setFaceDataOffset(offset);
		offset += faceDataLength;

		header.setColourDataOffset(offset);
		offset += header.getFaceCount() * 2;

		header.setUvMapFaceOffset(offset);
		offset += header.getTexturedFaceCount() * 6;

		header.setXDataOffset(offset);
		offset += xDataOffset;

		header.setYDataOffset(offset);
		offset += yDataOffset;

		header.setZDataOffset(offset);
		offset += zDataOffset;
		
		numVertices = header.getVertices();
		numFaces = header.getFaceCount();
		numTextures = header.getTexturedFaceCount();
		verticesX = new int[numVertices];
		verticesY = new int[numVertices];
		verticesZ = new int[numVertices];
		faceIndicesA = new int[numFaces];
		faceIndicesB = new int[numFaces];
		faceIndicesC = new int[numFaces];

		if(numTextures > 0){
			textureRenderTypes = new byte[numTextures];
			textureMappingP = new int[numTextures];
			textureMappingM = new int[numTextures];
			textureMappingN = new int[numTextures];
		}
		if(useTextures == 1){
			faceTypes = new int[numFaces];
			faceTextures = new int[numFaces];
			texture_coordinates = new byte[numFaces];
		}

		if (header.getVertexBoneOffset() >= 0) {
			vertexBones = new int[numVertices];
		}


		if (header.getFacePriorityOffset() >= 0) {
			facePriorities = new int[numFaces];
		} else {
			facePriority = -header.getFacePriorityOffset() - 1;
		}

		if (header.getFaceAlphaOffset() >= 0) {
			faceAlphas = new int[numFaces];
		}

		if (header.getFaceBoneOffset() >= 0) {
			faceSkin = new int[numFaces];
		}

		faceColours = new int[numFaces];
		Buffer directions = new Buffer(header.getData());
		directions.setPosition(header.getVertexDirectionOffset());

		Buffer verticesX = new Buffer(header.getData());
		verticesX.setPosition(header.getXDataOffset());

		Buffer verticesY = new Buffer(header.getData());
		verticesY.setPosition(header.getYDataOffset());

		Buffer verticesZ = new Buffer(header.getData());
		verticesZ.setPosition(header.getZDataOffset());

		Buffer bones = new Buffer(header.getData());
		bones.setPosition(header.getVertexBoneOffset());

		int baseX = 0;
		int baseY = 0;
		int baseZ = 0;

		for (int vertex = 0; vertex < numVertices; vertex++) {
			int mask = directions.readUByte();
			int x = 0;
			if ((mask & 1) != 0) {
				x = verticesX.readSmart();
			}

			int y = 0;
			if ((mask & 2) != 0) {
				y = verticesY.readSmart();
			}

			int z = 0;
			if ((mask & 4) != 0) {
				z = verticesZ.readSmart();
			}

			this.verticesX[vertex] = baseX + x;
			this.verticesY[vertex] = baseY + y;
			this.verticesZ[vertex] = baseZ + z;
			baseX = this.verticesX[vertex];
			baseY = this.verticesY[vertex];
			baseZ = this.verticesZ[vertex];

			if (vertexBones != null) {
				vertexBones[vertex] = bones.readUByte();
			}
		}

		Buffer colours = directions;
		colours.setPosition(header.getColourDataOffset());

		Buffer points = verticesX;
		points.setPosition(header.getTexturePointOffset());

		Buffer priorities = verticesY;
		priorities.setPosition(header.getFacePriorityOffset());

		Buffer alphas = verticesZ;
		alphas.setPosition(header.getFaceAlphaOffset());

		bones.setPosition(header.getFaceBoneOffset());

		for (int face = 0; face < numFaces; face++) {
			faceColours[face] = colours.readUShort();
			if (useTextures == 1) {
				int type = points.readUByte();
				faceTypes[face] = type;
				if((type & 2) == 2){
					this.texture_coordinates[face] = (byte)(type >> 2);
					this.faceTextures[face] = this.faceColours[face];
					this.faceColours[face] = 127;
				} else {
					this.faceTextures[face] = -1;
					this.texture_coordinates[face] = -1;
				}
			}
			if (facePriorities != null) {
				facePriorities[face] = priorities.readUByte();
			}
			if (faceAlphas != null) {
				faceAlphas[face] = alphas.readUByte();
			}
			if (faceSkin != null) {
				faceSkin[face] = bones.readUByte();
			}
		}

		Buffer faceData = directions;
		faceData.setPosition(header.getFaceDataOffset());

		Buffer types = verticesX;
		types.setPosition(header.getFaceTypeOffset());

		int faceX = 0;
		int faceY = 0;
		int faceZ = 0;
		offset = 0;

		for (int vertex = 0; vertex < numFaces; vertex++) {
			int type = types.readUByte();

			if (type == 1) {
				faceX = faceData.readSmart() + offset;
				offset = faceX;
				faceY = faceData.readSmart() + offset;
				offset = faceY;
				faceZ = faceData.readSmart() + offset;
				offset = faceZ;

				faceIndicesA[vertex] = faceX;
				faceIndicesB[vertex] = faceY;
				faceIndicesC[vertex] = faceZ;
			} else if (type == 2) {
				faceY = faceZ;
				faceZ = faceData.readSmart() + offset;
				offset = faceZ;

				faceIndicesA[vertex] = faceX;
				faceIndicesB[vertex] = faceY;
				faceIndicesC[vertex] = faceZ;
			} else if (type == 3) {
				faceX = faceZ;
				faceZ = faceData.readSmart() + offset;
				offset = faceZ;

				faceIndicesA[vertex] = faceX;
				faceIndicesB[vertex] = faceY;
				faceIndicesC[vertex] = faceZ;
			} else if (type == 4) {
				int temp = faceX;
				faceX = faceY;
				faceY = temp;

				faceZ = faceData.readSmart() + offset;
				offset = faceZ;

				faceIndicesA[vertex] = faceX;
				faceIndicesB[vertex] = faceY;
				faceIndicesC[vertex] = faceZ;
			}
		}

		Buffer maps = directions;
		maps.setPosition(header.getUvMapFaceOffset());

		for (int index = 0; index < numTextures; index++) {
			textureRenderTypes[index] = 0;
			textureMappingP[index] = maps.readUShort();
			textureMappingM[index] = maps.readUShort();
			textureMappingN[index] = maps.readUShort();
		}

		if(this.texture_coordinates != null) {
			boolean var46 = false;

			for(int var43 = 0; var43 < numFaces; ++var43) {
				int var44 = this.texture_coordinates[var43] & 255;
				if(var44 != 255) {
					if(this.faceIndicesA[var43] == (this.textureMappingP[var44] & '\uffff') && this.faceIndicesB[var43] == (this.textureMappingM[var44] & '\uffff') && this.faceIndicesC[var43] == (this.textureMappingN[var44] & '\uffff')) {
						this.texture_coordinates[var43] = -1;
					} else {
						var46 = true;
					}
				}
			}

			if(!var46) {
				this.texture_coordinates = null;
			}
		}

	}
}

public class Mesh525 extends Mesh {

	public Mesh525(byte[] abyte0) {
	        Buffer first = new Buffer(abyte0);
	        Buffer nc2 = new Buffer(abyte0);
	        Buffer nc3 = new Buffer(abyte0);
	        Buffer nc4 = new Buffer(abyte0);
	        Buffer nc5 = new Buffer(abyte0);
	        Buffer nc6 = new Buffer(abyte0);
	        Buffer nc7 = new Buffer(abyte0);
	        first.setPosition(abyte0.length - 23);
	        numVertices = first.readUShort();
	        numFaces = first.readUShort();
	        numTextures = first.readUByte();
	        int flags = first.readUByte();
	        boolean bool = (0x1 & flags ^ 0xffffffff) == -2;
	        int facePriorityFlag = first.readUByte();
	        int faceAlphaFlag = first.readUByte();
	        int faceSkinFlag = first.readUByte();
	        int faceTexturesFlag = first.readUByte();
	        int var17 = first.readUByte();
	        int var18 = first.readUShort();
	        int var19 = first.readUShort();
	        int var20 = first.readUShort();
	        int var21 = first.readUShort();
	        int var22 = first.readUShort();
	        int var2 = 0;
	        int l4 = 0;
	        int i5 = 0;
	        byte[] J = null;
	        byte[] F = null;
	        byte[] cb = null;
	        byte[] gb = null;
	        byte[] lb = null;
	        int[] kb = null;
	        int[] y = null;
	        int[] N = null;
	        faceColours = new int[numFaces];

	        if (numTextures > 0) {
	            textureRenderTypes = new byte[numTextures];
	            first.setPosition(0);
	            for (int j5 = 0; j5 < numTextures; j5++) {
	                byte byte0 = textureRenderTypes[j5] = first.readByte();
	                if (byte0 == 0)
	                    var2++;
	                if (byte0 >= 1 && byte0 <= 3)
	                    l4++;
	                if (byte0 == 2)
	                    i5++;
	            }
	        }
	        int k5 = numTextures;
	        int l5 = k5;
	        k5 += numVertices;
	        int i6 = k5;
	        if (flags == 1)
	            k5 += numFaces;
	        int j6 = k5;
	        k5 += numFaces;
	        int k6 = k5;
	        if (facePriorityFlag == 255)
	            k5 += numFaces;
	        int l6 = k5;
	        if (faceSkinFlag == 1)
	            k5 += numFaces;
	        int i7 = k5;
	        if (var17 == 1)
	            k5 += numVertices;
	        int j7 = k5;
	        if (faceAlphaFlag == 1)
	            k5 += numFaces;
	        int k7 = k5;
	        k5 += var21;
	        int l7 = k5;
	        if (faceTexturesFlag == 1)
	            k5 += numFaces * 2;
	        int i8 = k5;
	        k5 += var22;
	        int j8 = k5;
	        k5 += numFaces * 2;
	        int k8 = k5;
	        k5 += var18;
	        int l8 = k5;
	        k5 += var19;
	        int i9 = k5;
	        k5 += var20;
	        int j9 = k5;
	        k5 += var2 * 6;
	        int k9 = k5;
	        k5 += l4 * 6;
	        int l9 = k5;
	        k5 += l4 * 6;
	        int i10 = k5;
	        k5 += l4;
	        int j10 = k5;
	        k5 += l4;
	        int k10 = k5;
	        k5 += l4 + i5 * 2;
	        verticesX = new int[numVertices];
	        verticesY = new int[numVertices];
	        verticesZ = new int[numVertices];
	        faceIndicesA = new int[numFaces];
	        faceIndicesB = new int[numFaces];
	        faceIndicesC = new int[numFaces];
			if(flags == 1) {
				this.faceTypes = new int[numFaces];
			}

	        if (var17 == 1)
	            vertexBones = new int[numVertices];
	        if (bool)
	            faceTypes = new int[numFaces];
	        if (facePriorityFlag == 255)
	            facePriorities = new int[numFaces];
	        else {
	        }
	        if (faceAlphaFlag == 1)
	            faceAlphas = new int[numFaces];
	        if (faceSkinFlag == 1)
	            faceSkin = new int[numFaces];
	        if (faceTexturesFlag == 1) {
	            faceTextures = new int[numFaces];
	        }
	        if (faceTexturesFlag == 1 && numTextures > 0) {
	            this.texture_coordinates = new byte[numFaces];
	        }
	        faceColours = new int[numFaces];
	        if (numTextures > 0) {

	            textureMappingP = new int[numTextures];
	            textureMappingM = new int[numTextures];
	            textureMappingN = new int[numTextures];
	            if (l4 > 0) {
	                kb = new int[l4];
	                N = new int[l4];
	                y = new int[l4];
	                gb = new byte[l4];
	                lb = new byte[l4];
	                F = new byte[l4];
	            }
	            if (i5 > 0) {
	                cb = new byte[i5];
	                J = new byte[i5];
	            }
	        }
	        first.setPosition(l5);
	        nc2.setPosition(k8);
	        nc3.setPosition(l8);
	        nc4.setPosition(i9);
	        nc5.setPosition(i7);
	        int l10 = 0;
	        int i11 = 0;
	        int j11 = 0;
	        for (int k11 = 0; k11 < numVertices; k11++) {
	            int l11 = first.readUByte();
	            int j12 = 0;
	            if ((l11 & 1) != 0)
	                j12 = nc2.readSmart();
	            int l12 = 0;
	            if ((l11 & 2) != 0)
	                l12 = nc3.readSmart();
	            int j13 = 0;
	            if ((l11 & 4) != 0)
	                j13 = nc4.readSmart();
	            verticesX[k11] = l10 + j12;
	            verticesY[k11] = i11 + l12;
	            verticesZ[k11] = j11 + j13;
	            l10 = verticesX[k11];
	            i11 = verticesY[k11];
	            j11 = verticesZ[k11];
	            if (vertexBones != null)
	                vertexBones[k11] = nc5.readUByte();
	        }
	        first.setPosition(j8);
	        nc2.setPosition(i6);
	        nc3.setPosition(k6);
	        nc4.setPosition(j7);
	        nc5.setPosition(l6);
	        nc6.setPosition(l7);
	        nc7.setPosition(i8);
	        for (int i12 = 0; i12 < numFaces; i12++) {
	            faceColours[i12] = first.readUShort();
	            if (flags == 1) {
	                this.faceTypes[i12] = nc2.readUByte();
	            }
	            if (facePriorityFlag == 255) {
	                facePriorities[i12] = nc3.readByte();
	            }
	            if (faceAlphaFlag == 1) {
	                faceAlphas[i12] = nc4.readByte();
	            }
	            if (faceSkinFlag == 1)
	                faceSkin[i12] = nc5.readUByte();
	            if (faceTexturesFlag == 1) {
	            	faceTextures[i12] = (nc6.readUShort() - 1);

	            }

	            if (texture_coordinates != null)
	                if (faceTextures[i12] != -1)
	                    this.texture_coordinates[i12] = (byte) (nc7.readUByte() - 1);
	                else
	                    this.texture_coordinates[i12] = -1;
	        }
	        first.setPosition(k7);
	        nc2.setPosition(j6);
	        int k12 = 0;
	        int i13 = 0;
	        int k13 = 0;
	        int l13 = 0;
	        for (int i14 = 0; i14 < numFaces; i14++) {
	            int j14 = nc2.readUByte();
	            if (j14 == 1) {
	                k12 = first.readSmart() + l13;
	                l13 = k12;
	                i13 = first.readSmart() + l13;
	                l13 = i13;
	                k13 = first.readSmart() + l13;
	                l13 = k13;
	                faceIndicesA[i14] = k12 & 0xFFFF;
	                faceIndicesB[i14] = i13 & 0xFFFF;
	                faceIndicesC[i14] = k13 & 0xFFFF;
	            }
	            if (j14 == 2) {
	                i13 = k13;
	                k13 = first.readSmart() + l13;
	                l13 = k13;
	                faceIndicesA[i14] = k12 & 0xFFFF;
	                faceIndicesB[i14] = i13 & 0xFFFF;
	                faceIndicesC[i14] = k13 & 0xFFFF;
	            }
	            if (j14 == 3) {
	                k12 = k13;
	                k13 = first.readSmart() + l13;
	                l13 = k13;
	                faceIndicesA[i14] = k12 & 0xFFFF;
	                faceIndicesB[i14] = i13 & 0xFFFF;
	                faceIndicesC[i14] = k13 & 0xFFFF;
	            }
	            if (j14 == 4) {
	                int l14 = k12;
	                k12 = i13;
	                i13 = l14;
	                k13 = first.readSmart() + l13;
	                l13 = k13;
	                faceIndicesA[i14] = k12 & 0xFFFF;
	                faceIndicesB[i14] = i13 & 0xFFFF;
	                faceIndicesC[i14] = k13 & 0xFFFF;
	            }
	        }
	        first.setPosition(j9);
	        nc2.setPosition(k9);
	        nc3.setPosition(l9);
	        nc4.setPosition(i10);
	        nc5.setPosition(j10);
	        nc6.setPosition(k10);
	        for (int k14 = 0; k14 < numTextures; k14++) {
	            int i15 = textureRenderTypes[k14] & 0xff;
	            if (i15 == 0) {
	                textureMappingP[k14] = first.readUShort();
	                textureMappingM[k14] = first.readUShort();
	                textureMappingN[k14] = first.readUShort();
	            }
	            if (i15 == 1) {
	                textureMappingP[k14] = nc2.readUShort();
	                textureMappingM[k14] = nc2.readUShort();
	                textureMappingN[k14] = nc2.readUShort();
	                kb[k14] = nc3.readUShort();
	                N[k14] = nc3.readUShort();
	                y[k14] = nc3.readUShort();
	                gb[k14] = nc4.readByte();
	                lb[k14] = nc5.readByte();
	                F[k14] = nc6.readByte();
	            }
	            if (i15 == 2) {
	                textureMappingP[k14] = nc2.readUShort();
	                textureMappingM[k14] = nc2.readUShort();
	                textureMappingN[k14] = nc2.readUShort();
	                kb[k14] = nc3.readUShort();
	                N[k14] = nc3.readUShort();
	                y[k14] = nc3.readUShort();
	                gb[k14] = nc4.readByte();
	                lb[k14] = nc5.readByte();
	                F[k14] = nc6.readByte();
	                cb[k14] = nc6.readByte();
	                J[k14] = nc6.readByte();
	            }
	            if (i15 == 3) {
		            textureMappingP[k14] = nc2.readUShort();
		            textureMappingM[k14] = nc2.readUShort();
		            textureMappingN[k14] = nc2.readUShort();
	                kb[k14] = nc3.readUShort();
	                N[k14] = nc3.readUShort();
	                y[k14] = nc3.readUShort();
	                gb[k14] = nc4.readByte();
	                lb[k14] = nc5.readByte();
	                F[k14] = nc6.readByte();
	            }
	        }
	        //convertTexturesTo317(textureIds, texTrianglesPoint1, texTrianglesPoint2, texTrianglesPoint3, false);
	}
}

public class Mesh622 extends Mesh {
	
	private boolean newFormat;

	public Mesh622(byte[] abyte0) {
        Buffer nc1 = new Buffer(abyte0);
        Buffer nc2 = new Buffer(abyte0);
        Buffer nc3 = new Buffer(abyte0);
        Buffer nc4 = new Buffer(abyte0);
        Buffer nc5 = new Buffer(abyte0);
        Buffer nc6 = new Buffer(abyte0);
        Buffer nc7 = new Buffer(abyte0);
        nc1.setPosition(abyte0.length - 23);
        int numVertices = nc1.readUShort();
        int numTriangles = nc1.readUShort();
        int numTexTriangles = nc1.readUByte();
        
        
        int l1 = nc1.readUByte();
        boolean bool = (0x1 & l1 ^ 0xffffffff) == -2;
        boolean bool_26_ = (0x8 & l1) == 8;
        
        int newformat = 0;
        if (bool_26_) {
            nc1.setPosition(nc1.getPosition() - 7);
            newformat = nc1.readUByte();
            nc1.setPosition(nc1.getPosition() + 6);
        }
        if (newformat == 15)
        	this.newFormat = true;
        int i2 = nc1.readUByte();
        int j2 = nc1.readUByte();
        int k2 = nc1.readUByte();
        int l2 = nc1.readUByte();
        int i3 = nc1.readUByte();
        int j3 = nc1.readUShort();
        int k3 = nc1.readUShort();
        int l3 = nc1.readUShort();
        int i4 = nc1.readUShort();
        int j4 = nc1.readUShort();
        int k4 = 0;
        int l4 = 0;
        int i5 = 0;
        byte[] textureCoordinates = null;
        byte[] O = null;
        byte[] J = null;
        byte[] F = null;
        byte[] cb = null;
        byte[] gb = null;
        byte[] lb = null;
        int[] kb = null;
        int[] y = null;
        int[] N = null;
        short[] textureIds = null;
        int[] faceColours2 = new int[numTriangles];
        if (numTexTriangles > 0) {
            O = new byte[numTexTriangles];
            nc1.setPosition(0);
            for (int j5 = 0; j5 < numTexTriangles; j5++) {
                byte byte0 = O[j5] = nc1.readByte();
                if (byte0 == 0)
                    k4++;
                if (byte0 >= 1 && byte0 <= 3)
                    l4++;
                if (byte0 == 2)
                    i5++;
            }
        }
        int k5 = numTexTriangles;
        int l5 = k5;
        k5 += numVertices;
        int i6 = k5;
        if (bool)
            k5 += numTriangles;
        if (l1 == 1)
            k5 += numTriangles;
        int j6 = k5;
        k5 += numTriangles;
        int k6 = k5;
        if (i2 == 255)
            k5 += numTriangles;
        int l6 = k5;
        if (k2 == 1)
            k5 += numTriangles;
        int i7 = k5;
        if (i3 == 1)
            k5 += numVertices;
        int j7 = k5;
        if (j2 == 1)
            k5 += numTriangles;
        int k7 = k5;
        k5 += i4;
        int l7 = k5;
        if (l2 == 1)
            k5 += numTriangles * 2;
        int i8 = k5;
        k5 += j4;
        int j8 = k5;
        k5 += numTriangles * 2;
        int k8 = k5;
        k5 += j3;
        int l8 = k5;
        k5 += k3;
        int i9 = k5;
        k5 += l3;
        int j9 = k5;
        k5 += k4 * 6;
        int k9 = k5;
        k5 += l4 * 6;
        int i_59_ = 6;
        if (newformat != 14) {
            if (newformat >= 15)
                i_59_ = 9;
        } else
            i_59_ = 7;
        int l9 = k5;
        k5 += i_59_ * l4;
        int i10 = k5;
        k5 += l4;
        int j10 = k5;
        k5 += l4;
        int k10 = k5;
        k5 += l4 + i5 * 2;
        int[] vertexX = new int[numVertices];
        int[] vertexY = new int[numVertices];
        int[] vertexZ = new int[numVertices];
        int[] facePoint1 = new int[numTriangles];
        int[] facePoint2 = new int[numTriangles];
        int[] facePoint3 = new int[numTriangles];
        vertexBones = new int[numVertices];
        faceTypes = new int[numTriangles];
        facePriorities = new int[numTriangles];
        faceAlphas = new int[numTriangles];
        faceSkin = new int[numTriangles];
        if (i3 == 1)
            vertexBones = new int[numVertices];
        if (bool)
            faceTypes = new int[numTriangles];
        if (i2 == 255)
            facePriorities = new int[numTriangles];
        else {
        }
        if (j2 == 1)
            faceAlphas = new int[numTriangles];
        if (k2 == 1)
            faceSkin = new int[numTriangles];
        if (l2 == 1)
            textureIds = new short[numTriangles];
        if (l2 == 1 && numTexTriangles > 0) {
            textureCoordinates = texture_coordinates = new byte[numTriangles];
        }
        faceColours2 = new int[numTriangles];
        int[] texTrianglesPoint1 = null;
        int[] texTrianglesPoint2 = null;
        int[] texTrianglesPoint3 = null;
        if (numTexTriangles > 0) {
            texTrianglesPoint1 = new int[numTexTriangles];
            texTrianglesPoint2 = new int[numTexTriangles];
            texTrianglesPoint3 = new int[numTexTriangles];
            if (l4 > 0) {
                kb = new int[l4];
                N = new int[l4];
                y = new int[l4];
                gb = new byte[l4];
                lb = new byte[l4];
                F = new byte[l4];
            }
            if (i5 > 0) {
                cb = new byte[i5];
                J = new byte[i5];
            }
        }
        nc1.setPosition(l5);
        nc2.setPosition(k8);
        nc3.setPosition(l8);
        nc4.setPosition(i9);
        nc5.setPosition(i7);
        int l10 = 0;
        int i11 = 0;
        int j11 = 0;
        for (int k11 = 0; k11 < numVertices; k11++) {
            int l11 = nc1.readUByte();
            int j12 = 0;
            if ((l11 & 1) != 0)
                j12 = nc2.readSmart();
            int l12 = 0;
            if ((l11 & 2) != 0)
                l12 = nc3.readSmart();
            int j13 = 0;
            if ((l11 & 4) != 0)
                j13 = nc4.readSmart();
            vertexX[k11] = l10 + j12;
            vertexY[k11] = i11 + l12;
            vertexZ[k11] = j11 + j13;
            l10 = vertexX[k11];
            i11 = vertexY[k11];
            j11 = vertexZ[k11];
            if (vertexBones != null)
                vertexBones[k11] = nc5.readUByte();
        }
        nc1.setPosition(j8);
        nc2.setPosition(i6);
        nc3.setPosition(k6);
        nc4.setPosition(j7);
        nc5.setPosition(l6);
        nc6.setPosition(l7);
        nc7.setPosition(i8);
        for (int i12 = 0; i12 < numTriangles; i12++) {
            faceColours2[i12] = nc1.readUShort();
            if (l1 == 1) {
                faceTypes[i12] = nc2.readByte();
                if (faceTypes[i12] == 2)
                    faceColours2[i12] = 65535;
                faceTypes[i12] = 0;
            }
            if (i2 == 255) {
                facePriorities[i12] = nc3.readByte();
            }
            if (j2 == 1) {
                faceAlphas[i12] = nc4.readByte();
                if (faceAlphas[i12] < 0)
                    faceAlphas[i12] = (256 + faceAlphas[i12]);
            }
            if (k2 == 1)
                faceSkin[i12] = nc5.readUByte();
            if (l2 == 1)
                textureIds[i12] = (short) (nc6.readUShort() - 1);
            if (textureCoordinates != null)
                if (textureIds[i12] != -1)
                    textureCoordinates[i12] = texture_coordinates[i12] = (byte) (nc7.readUByte() - 1);
                else
                    textureCoordinates[i12] = texture_coordinates[i12] = -1;
        }
        nc1.setPosition(k7);
        nc2.setPosition(j6);
        int k12 = 0;
        int i13 = 0;
        int k13 = 0;
        int l13 = 0;
        for (int i14 = 0; i14 < numTriangles; i14++) {
            int j14 = nc2.readUByte();
            if (j14 == 1) {
                k12 = nc1.readSmart() + l13;
                l13 = k12;
                i13 = nc1.readSmart() + l13;
                l13 = i13;
                k13 = nc1.readSmart() + l13;
                l13 = k13;
                facePoint1[i14] = k12;
                facePoint2[i14] = i13;
                facePoint3[i14] = k13;
            }
            if (j14 == 2) {
                i13 = k13;
                k13 = nc1.readSmart() + l13;
                l13 = k13;
                facePoint1[i14] = k12;
                facePoint2[i14] = i13;
                facePoint3[i14] = k13;
            }
            if (j14 == 3) {
                k12 = k13;
                k13 = nc1.readSmart() + l13;
                l13 = k13;
                facePoint1[i14] = k12;
                facePoint2[i14] = i13;
                facePoint3[i14] = k13;
            }
            if (j14 == 4) {
                int l14 = k12;
                k12 = i13;
                i13 = l14;
                k13 = nc1.readSmart() + l13;
                l13 = k13;
                facePoint1[i14] = k12;
                facePoint2[i14] = i13;
                facePoint3[i14] = k13;
            }
        }
        nc1.setPosition(j9);
        nc2.setPosition(k9);
        nc3.setPosition(l9);
        nc4.setPosition(i10);
        nc5.setPosition(j10);
        nc6.setPosition(k10);
        for (int k14 = 0; k14 < numTexTriangles; k14++) {
            int i15 = O[k14] & 0xff;
            if (i15 == 0) {
                texTrianglesPoint1[k14] = nc1.readUShort();
                texTrianglesPoint2[k14] = nc1.readUShort();
                texTrianglesPoint3[k14] = nc1.readUShort();
            }
            if (i15 == 1) {
                texTrianglesPoint1[k14] = nc2.readUShort();
                texTrianglesPoint2[k14] = nc2.readUShort();
                texTrianglesPoint3[k14] = nc2.readUShort();
                if (newformat < 15) {
                    kb[k14] = nc3.readUShort();
                    if (newformat >= 14)
                        N[k14] = nc3.readUTriByte();
                    else
                        N[k14] = nc3.readUShort();
                    y[k14] = nc3.readUShort();
                } else {
                    kb[k14] = nc3.readUTriByte();
                    N[k14] = nc3.readUTriByte();
                    y[k14] = nc3.readUTriByte();
                }
                gb[k14] = nc4.readByte();
                lb[k14] = nc5.readByte();
                F[k14] = nc6.readByte();
            }
            if (i15 == 2) {
                texTrianglesPoint1[k14] = nc2.readUShort();
                texTrianglesPoint2[k14] = nc2.readUShort();
                texTrianglesPoint3[k14] = nc2.readUShort();
                if (newformat >= 15) {
                    kb[k14] = nc3.readUTriByte();
                    N[k14] = nc3.readUTriByte();
                    y[k14] = nc3.readUTriByte();
                } else {
                    kb[k14] = nc3.readUShort();
                    if (newformat < 14)
                        N[k14] = nc3.readUShort();
                    else
                        N[k14] = nc3.readUTriByte();
                    y[k14] = nc3.readUShort();
                }
                gb[k14] = nc4.readByte();
                lb[k14] = nc5.readByte();
                F[k14] = nc6.readByte();
                cb[k14] = nc6.readByte();
                J[k14] = nc6.readByte();
            }
            if (i15 == 3) {
                texTrianglesPoint1[k14] = nc2.readUShort();
                texTrianglesPoint2[k14] = nc2.readUShort();
                texTrianglesPoint3[k14] = nc2.readUShort();
                if (newformat < 15) {
                    kb[k14] = nc3.readUShort();
                    if (newformat < 14)
                        N[k14] = nc3.readUShort();
                    else
                        N[k14] = nc3.readUTriByte();
                    y[k14] = nc3.readUShort();
                } else {
                    kb[k14] = nc3.readUTriByte();
                    N[k14] = nc3.readUTriByte();
                    y[k14] = nc3.readUTriByte();
                }
                gb[k14] = nc4.readByte();
                lb[k14] = nc5.readByte();
                F[k14] = nc6.readByte();
            }
        }
        if (i2 != 255) {
            for (int i12 = 0; i12 < numTriangles; i12++)
                facePriorities[i12] = i2;
        }
        this.faceColours = faceColours2;
        this.numVertices = numVertices;
        this.numFaces = numTriangles;
        this.verticesX = vertexX;
        this.verticesY = vertexY;
        this.verticesZ = vertexZ;
        faceIndicesA = facePoint1;
        faceIndicesB = facePoint2;
        faceIndicesC = facePoint3;
        filterTriangles();
        scale2(4);
        convertTexturesTo317(textureIds, texTrianglesPoint1, texTrianglesPoint2, texTrianglesPoint3, false);
	}
}