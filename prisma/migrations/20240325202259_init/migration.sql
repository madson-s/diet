/*
  Warnings:

  - You are about to drop the `FoodConsumption` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "PatientGender" ADD VALUE 'OTHER';

-- DropForeignKey
ALTER TABLE "FoodConsumption" DROP CONSTRAINT "FoodConsumption_patientId_fkey";

-- DropForeignKey
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_consumptionId_fkey";

-- DropTable
DROP TABLE "FoodConsumption";

-- CreateTable
CREATE TABLE "Reminder" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reminder" ADD CONSTRAINT "Reminder_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_consumptionId_fkey" FOREIGN KEY ("consumptionId") REFERENCES "Reminder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
