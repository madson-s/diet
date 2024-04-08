-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'NUTRITIONIST');

-- CreateEnum
CREATE TYPE "PatientGender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "AnthropometricFormula" AS ENUM ('DEFAULT');

-- CreateEnum
CREATE TYPE "CircumferenceSide" AS ENUM ('BOTH', 'LEFT', 'RIGHT');

-- CreateEnum
CREATE TYPE "ValidationType" AS ENUM ('CONTENT', 'UI', 'UX');

-- CreateEnum
CREATE TYPE "QuestionAnswerType" AS ENUM ('TEXT', 'RADIO', 'CHECKBOX', 'RATING');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "UserType" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "PatientGender" NOT NULL,
    "income" DOUBLE PRECISION,
    "scholarity" TEXT,
    "contact" TEXT,
    "nutritionistId" INTEGER NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anamnesis" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Anamnesis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodConsumption" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "FoodConsumption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" SERIAL NOT NULL,
    "consumptionId" INTEGER NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Portion" (
    "id" SERIAL NOT NULL,
    "quantity" TEXT NOT NULL,
    "mealId" INTEGER NOT NULL,
    "foodId" INTEGER NOT NULL,
    "mensureId" INTEGER NOT NULL,

    CONSTRAINT "Portion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Measure" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "portion" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Measure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "lipid" DOUBLE PRECISION NOT NULL,
    "carbohydrate" DOUBLE PRECISION NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "portion" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anthropometric" (
    "id" SERIAL NOT NULL,
    "formula" "AnthropometricFormula" NOT NULL,
    "wight" DOUBLE PRECISION NOT NULL,
    "hight" DOUBLE PRECISION NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Anthropometric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkinFold" (
    "id" SERIAL NOT NULL,
    "triceps" INTEGER,
    "biceps" INTEGER,
    "subscapularis" INTEGER,
    "suprailiac" INTEGER,
    "middleAxillary" INTEGER,
    "thoracic" INTEGER,
    "supraspinatus" INTEGER,
    "abdominal" INTEGER,
    "thigh" INTEGER,
    "calf" INTEGER,
    "anthropometricId" INTEGER NOT NULL,

    CONSTRAINT "SkinFold_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Circumference" (
    "id" SERIAL NOT NULL,
    "neck" INTEGER,
    "chest" INTEGER,
    "waist" INTEGER,
    "hip" INTEGER,
    "abdomen" INTEGER,
    "anthropometricId" INTEGER NOT NULL,

    CONSTRAINT "Circumference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LateralCircumference" (
    "id" SERIAL NOT NULL,
    "side" "CircumferenceSide" NOT NULL,
    "relaxedArm" INTEGER,
    "contractedArm" INTEGER,
    "forearm" INTEGER,
    "calf" INTEGER,
    "thigh" INTEGER,
    "circumferencesId" INTEGER,

    CONSTRAINT "LateralCircumference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bioimpedance" (
    "id" SERIAL NOT NULL,
    "fatMassPercentage" DOUBLE PRECISION NOT NULL,
    "fatMass" DOUBLE PRECISION NOT NULL,
    "leanMassPercentage" DOUBLE PRECISION NOT NULL,
    "leanMass" DOUBLE PRECISION NOT NULL,
    "fatFreeMass" DOUBLE PRECISION NOT NULL,
    "boneWeight" INTEGER NOT NULL,
    "bodyWater" INTEGER NOT NULL,
    "metabolicAge" INTEGER NOT NULL,
    "anthropometricId" INTEGER NOT NULL,

    CONSTRAINT "Bioimpedance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Validation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "ValidationType" NOT NULL,

    CONSTRAINT "Validation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "validationId" INTEGER NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "statement" TEXT NOT NULL,
    "answerType" "QuestionAnswerType" NOT NULL,
    "options" JSONB,
    "quizId" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "payload" JSONB,
    "quizId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Validation_userId_type_key" ON "Validation"("userId", "type");

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_nutritionistId_fkey" FOREIGN KEY ("nutritionistId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Anamnesis" ADD CONSTRAINT "Anamnesis_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodConsumption" ADD CONSTRAINT "FoodConsumption_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_consumptionId_fkey" FOREIGN KEY ("consumptionId") REFERENCES "FoodConsumption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Portion" ADD CONSTRAINT "Portion_mensureId_fkey" FOREIGN KEY ("mensureId") REFERENCES "Measure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Portion" ADD CONSTRAINT "Portion_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Portion" ADD CONSTRAINT "Portion_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Anthropometric" ADD CONSTRAINT "Anthropometric_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkinFold" ADD CONSTRAINT "SkinFold_anthropometricId_fkey" FOREIGN KEY ("anthropometricId") REFERENCES "Anthropometric"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Circumference" ADD CONSTRAINT "Circumference_anthropometricId_fkey" FOREIGN KEY ("anthropometricId") REFERENCES "Anthropometric"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LateralCircumference" ADD CONSTRAINT "LateralCircumference_circumferencesId_fkey" FOREIGN KEY ("circumferencesId") REFERENCES "Circumference"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bioimpedance" ADD CONSTRAINT "Bioimpedance_anthropometricId_fkey" FOREIGN KEY ("anthropometricId") REFERENCES "Anthropometric"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Validation" ADD CONSTRAINT "Validation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_validationId_fkey" FOREIGN KEY ("validationId") REFERENCES "Validation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
