/*
  Warnings:

  - Changed the type of `author` on the `message` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Author" AS ENUM ('DOCTOR', 'PATIENT');

-- AlterTable
ALTER TABLE "message" DROP COLUMN "author",
ADD COLUMN     "author" "Author" NOT NULL;

-- DropEnum
DROP TYPE "UserType";
