-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'NUTRITIONIST');

-- CreateEnum
CREATE TYPE "PatientGender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "FoodDegree" AS ENUM ('IN_NATURE', 'MIN_PROCESSED', 'PROCESSED', 'ULTRA_PROCESSED', 'INGREDIENT');

-- CreateEnum
CREATE TYPE "FoodOrigin" AS ENUM ('IBGE', 'TACO', 'TBCA');

-- CreateEnum
CREATE TYPE "AnthropometricFormula" AS ENUM ('DEFAULT');

-- CreateEnum
CREATE TYPE "CircumferenceSide" AS ENUM ('BOTH', 'LEFT', 'RIGHT');

-- CreateEnum
CREATE TYPE "ValidationType" AS ENUM ('CONTENT', 'UI', 'UX');

-- CreateEnum
CREATE TYPE "QuestionAnswerType" AS ENUM ('TEXT', 'RADIO', 'CHECKBOX', 'RATING');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "UserType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "PatientGender" NOT NULL,
    "income" DOUBLE PRECISION,
    "scholarity" TEXT,
    "contact" TEXT,
    "nutritionistId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointment" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "patientId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anamnesis" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "appointmentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "anamnesis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reminder" (
    "id" SERIAL NOT NULL,
    "appointmentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "reminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "reminderId" INTEGER NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portion" (
    "id" SERIAL NOT NULL,
    "quantity" TEXT NOT NULL,
    "mealId" INTEGER NOT NULL,
    "foodId" INTEGER NOT NULL,
    "mensureId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "portion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "measure" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "portion" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "measure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "portion" DOUBLE PRECISION,
    "unit" TEXT,
    "degree" "FoodDegree" NOT NULL,
    "origin" "FoodOrigin" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "macronutrients" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "protein" DOUBLE PRECISION,
    "lipid" DOUBLE PRECISION,
    "carbohydrate" DOUBLE PRECISION,
    "calories" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "macronutrients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "micronutrients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "foodId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "micronutrients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anthropometric" (
    "id" SERIAL NOT NULL,
    "formula" "AnthropometricFormula" NOT NULL,
    "weight" DOUBLE PRECISION,
    "height" DOUBLE PRECISION,
    "appointmentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "anthropometric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skin_fold" (
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "skin_fold_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "circumference" (
    "id" SERIAL NOT NULL,
    "neck" INTEGER,
    "chest" INTEGER,
    "waist" INTEGER,
    "hip" INTEGER,
    "abdomen" INTEGER,
    "anthropometricId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "circumference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lateral_circunference" (
    "id" SERIAL NOT NULL,
    "side" "CircumferenceSide" NOT NULL,
    "relaxedArm" INTEGER,
    "contractedArm" INTEGER,
    "forearm" INTEGER,
    "calf" INTEGER,
    "thigh" INTEGER,
    "circumferencesId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "lateral_circunference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bioimpedance" (
    "id" SERIAL NOT NULL,
    "fatMassPercentage" DOUBLE PRECISION,
    "fatMass" DOUBLE PRECISION,
    "leanMassPercentage" DOUBLE PRECISION,
    "leanMass" DOUBLE PRECISION,
    "fatFreeMass" DOUBLE PRECISION,
    "boneWeight" INTEGER,
    "bodyWater" INTEGER,
    "metabolicAge" INTEGER,
    "anthropometricId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "bioimpedance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "validation" (
    "id" SERIAL NOT NULL,
    "type" "ValidationType" NOT NULL,

    CONSTRAINT "validation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quiz" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "validationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question" (
    "id" SERIAL NOT NULL,
    "statement" TEXT NOT NULL,
    "answerType" "QuestionAnswerType" NOT NULL,
    "options" JSONB,
    "quizId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answer" (
    "id" SERIAL NOT NULL,
    "payload" JSONB,
    "quizId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_token" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "refresh_token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "anamnesis_appointmentId_key" ON "anamnesis"("appointmentId");

-- CreateIndex
CREATE UNIQUE INDEX "reminder_appointmentId_key" ON "reminder"("appointmentId");

-- CreateIndex
CREATE UNIQUE INDEX "macronutrients_foodId_key" ON "macronutrients"("foodId");

-- CreateIndex
CREATE UNIQUE INDEX "anthropometric_appointmentId_key" ON "anthropometric"("appointmentId");

-- CreateIndex
CREATE UNIQUE INDEX "skin_fold_anthropometricId_key" ON "skin_fold"("anthropometricId");

-- CreateIndex
CREATE UNIQUE INDEX "circumference_anthropometricId_key" ON "circumference"("anthropometricId");

-- CreateIndex
CREATE UNIQUE INDEX "bioimpedance_anthropometricId_key" ON "bioimpedance"("anthropometricId");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_token_key" ON "refresh_token"("token");

-- AddForeignKey
ALTER TABLE "patient" ADD CONSTRAINT "patient_nutritionistId_fkey" FOREIGN KEY ("nutritionistId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anamnesis" ADD CONSTRAINT "anamnesis_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reminder" ADD CONSTRAINT "reminder_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal" ADD CONSTRAINT "meal_reminderId_fkey" FOREIGN KEY ("reminderId") REFERENCES "reminder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portion" ADD CONSTRAINT "portion_mensureId_fkey" FOREIGN KEY ("mensureId") REFERENCES "measure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portion" ADD CONSTRAINT "portion_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portion" ADD CONSTRAINT "portion_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "macronutrients" ADD CONSTRAINT "macronutrients_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "micronutrients" ADD CONSTRAINT "micronutrients_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anthropometric" ADD CONSTRAINT "anthropometric_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skin_fold" ADD CONSTRAINT "skin_fold_anthropometricId_fkey" FOREIGN KEY ("anthropometricId") REFERENCES "anthropometric"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "circumference" ADD CONSTRAINT "circumference_anthropometricId_fkey" FOREIGN KEY ("anthropometricId") REFERENCES "anthropometric"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lateral_circunference" ADD CONSTRAINT "lateral_circunference_circumferencesId_fkey" FOREIGN KEY ("circumferencesId") REFERENCES "circumference"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bioimpedance" ADD CONSTRAINT "bioimpedance_anthropometricId_fkey" FOREIGN KEY ("anthropometricId") REFERENCES "anthropometric"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz" ADD CONSTRAINT "quiz_validationId_fkey" FOREIGN KEY ("validationId") REFERENCES "validation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_token" ADD CONSTRAINT "refresh_token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
