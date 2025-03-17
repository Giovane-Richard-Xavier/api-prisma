/*
  Warnings:

  - You are about to drop the `_Author_Books` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Author_Books" DROP CONSTRAINT "_Author_Books_A_fkey";

-- DropForeignKey
ALTER TABLE "_Author_Books" DROP CONSTRAINT "_Author_Books_B_fkey";

-- DropTable
DROP TABLE "_Author_Books";

-- CreateTable
CREATE TABLE "author_books" (
    "id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "book_id" TEXT NOT NULL,

    CONSTRAINT "author_books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "author_books_author_id_book_id_key" ON "author_books"("author_id", "book_id");

-- AddForeignKey
ALTER TABLE "author_books" ADD CONSTRAINT "author_books_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "author_books" ADD CONSTRAINT "author_books_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
