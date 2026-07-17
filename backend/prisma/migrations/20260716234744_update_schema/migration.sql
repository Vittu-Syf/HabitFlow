-- DropIndex
DROP INDEX "Goal_habitId_key";

-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "startDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "HabitCheck" ADD COLUMN     "notes" TEXT;
