CREATE TABLE `todos` (
	`id` integer PRIMARY KEY NOT NULL,
	`completed` integer DEFAULT false,
	`content` text NOT NULL
);
