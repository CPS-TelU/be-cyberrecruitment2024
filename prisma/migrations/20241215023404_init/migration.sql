-- CreateTable
CREATE TABLE "researchs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "noHp" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "researchs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practicums" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "noHp" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "practicums_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "researchs_nim_key" ON "researchs"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "researchs_email_key" ON "researchs"("email");

-- CreateIndex
CREATE UNIQUE INDEX "practicums_nim_key" ON "practicums"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "practicums_email_key" ON "practicums"("email");
