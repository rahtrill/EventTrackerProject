-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `workoutdb` ;

-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workoutdb` DEFAULT CHARACTER SET utf8 ;
USE `workoutdb` ;

-- -----------------------------------------------------
-- Table `workout`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `workout` ;

CREATE TABLE IF NOT EXISTS `workout` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `type` VARCHAR(500) NOT NULL,
  `duration` INT NOT NULL,
  `sets` INT NULL,
  `reps` INT NOT NULL,
  `calories_burned` INT NULL,
  `body_weight` INT NULL,
  `details` VARCHAR(500) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS workoutuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'workoutuser'@'localhost' IDENTIFIED BY 'workoutuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'workoutuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `workout`
-- -----------------------------------------------------
START TRANSACTION;
USE `workoutdb`;
INSERT INTO `workout` (`id`, `date`, `type`, `duration`, `sets`, `reps`, `calories_burned`, `body_weight`, `details`) VALUES (1, '2022-05-05', 'Cardio', 45, 3, 10, NULL, 186, 'I ran half a mile further thna usual today.');
INSERT INTO `workout` (`id`, `date`, `type`, `duration`, `sets`, `reps`, `calories_burned`, `body_weight`, `details`) VALUES (2, '2022-05-06', 'Bench', 10, 2, 5, 434, 194, 'I want to bench one extra set when dynamic lifting');
INSERT INTO `workout` (`id`, `date`, `type`, `duration`, `sets`, `reps`, `calories_burned`, `body_weight`, `details`) VALUES (3, '2022-05-06', 'Squat', 15, 4, 7, NULL, NULL, NULL);
INSERT INTO `workout` (`id`, `date`, `type`, `duration`, `sets`, `reps`, `calories_burned`, `body_weight`, `details`) VALUES (4, '2022-05-07', 'Deadlift', 20, NULL, 10, 350, NULL, 'My deadlift max is 310. This time I got to 300.');
INSERT INTO `workout` (`id`, `date`, `type`, `duration`, `sets`, `reps`, `calories_burned`, `body_weight`, `details`) VALUES (5, '2022-05-07', 'Deadlift', 10, 3, 10, 200, 210, NULL);
INSERT INTO `workout` (`id`, `date`, `type`, `duration`, `sets`, `reps`, `calories_burned`, `body_weight`, `details`) VALUES (6, '2022-05-07', 'Powerclean', 5, NULL, 5, NULL, 165, 'I did one more powerclean repetition than usual');

COMMIT;

