-- CreateTable
CREATE TABLE "user" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "comment" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "number_of_likes" INTEGER NOT NULL DEFAULT 0,
    "author_email" TEXT NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_liked_comments" (
    "comment_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_liked_comments_comment_id_key" ON "user_liked_comments"("comment_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_liked_comments_user_email_key" ON "user_liked_comments"("user_email");

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_author_email_fkey" FOREIGN KEY ("author_email") REFERENCES "user"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_liked_comments" ADD CONSTRAINT "user_liked_comments_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_liked_comments" ADD CONSTRAINT "user_liked_comments_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "user"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
