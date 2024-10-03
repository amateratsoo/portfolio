-- DropIndex
DROP INDEX "user_liked_comments_comment_id_key";

-- DropIndex
DROP INDEX "user_liked_comments_user_email_key";

-- AlterTable
ALTER TABLE "user_liked_comments" ADD CONSTRAINT "user_liked_comments_pkey" PRIMARY KEY ("comment_id", "user_email");
