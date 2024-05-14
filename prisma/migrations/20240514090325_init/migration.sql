-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'BASIC');

-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "author" "UserType" NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);
