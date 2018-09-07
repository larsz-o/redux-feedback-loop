-- Database should be dinner_diary
CREATE DATABASE "dinner_diary";
-- Table to store names of meals 
CREATE TABLE "dinners" (
  "id" serial primary key,
  "meal" varchar(250) not null, 
  "name" varchar(75) not null
);
-- Table to store feedback 
CREATE TABLE "feedback" (
  "id" serial primary key,
  "taste" INT not null,
  "texture" INT not null,
  "creativity" INT not null,
  "nutrition" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE, 
  "meal_id" int FOREIGN KEY REFERENCES "dinners"."id"
); 
-- Sample meal entry
INSERT INTO "dinners" ("meal", "name")
VALUES ('butternut squash soup with salad', 'lars');
-- Sample feedback item
INSERT INTO "feedback" ("taste", "texture", "creativity", "nutrition", "comments")
VALUES (4, 4, 5, 3, 'I loved this meal!');

