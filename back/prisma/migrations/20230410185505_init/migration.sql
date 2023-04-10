/*
  Warnings:

  - Made the column `organizerId` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "ParticipantsOnProjects" (
    "participantId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("participantId", "projectId"),
    CONSTRAINT "ParticipantsOnProjects_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ParticipantsOnProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "archived" BOOLEAN DEFAULT false,
    "organizerId" INTEGER NOT NULL,
    CONSTRAINT "Project_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("archived", "id", "organizerId", "title") SELECT "archived", "id", "organizerId", "title" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
