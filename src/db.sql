CREATE DATABASE IF NOT EXISTS portfolio_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE portfolio_db;

CREATE TABLE users (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  email      VARCHAR(255) NOT NULL UNIQUE,
  password   VARCHAR(255) NOT NULL,
  role       VARCHAR(50)  NOT NULL ENUM('ADMIN', 'USER'),
  verified   BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  title       VARCHAR(150)  NOT NULL,
  description TEXT NOT NULL,
  category_id VARCHAR(255) NOT NULL,
  tech_stack  VARCHAR(255) NOT NULL,
  github_url  VARCHAR(500),
  demo_url    VARCHAR(500),
  image_url   VARCHAR(500) NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
)

-- Une virgule ou une parenthèse droite était attendus. (near "ENUM" at position 180)
-- Début d'énoncé inattendu. (near "'ADMIN'" at position 186)
-- Début d'énoncé inattendu. (near "'USER'" at position 195)
-- Début d'énoncé inattendu. (near "verified" at position 206)
-- Type d'énoncé non reconnu. (near "BOOLEAN" at position 217)