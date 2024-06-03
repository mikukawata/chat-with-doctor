-- CreateEnum
CREATE TYPE "Author" AS ENUM ('DOCTOR', 'PATIENT');

-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "author" "Author" NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);
