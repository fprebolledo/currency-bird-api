-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "retries" INTEGER NOT NULL,
    "transferCode" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_email_key" ON "Transaction"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_transferCode_key" ON "Transaction"("transferCode");
