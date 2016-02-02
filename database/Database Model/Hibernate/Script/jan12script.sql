-- MySQL Script generated by MySQL Workbench
-- 01/12/16 23:30:55
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema MyWorkflowApp
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `MyWorkflowApp` ;

-- -----------------------------------------------------
-- Schema MyWorkflowApp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MyWorkflowApp` DEFAULT CHARACTER SET utf8 ;
USE `MyWorkflowApp` ;

-- -----------------------------------------------------
-- Table `MyWorkflowApp`.`M01_USER`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MyWorkflowApp`.`M01_USER` ;

CREATE TABLE IF NOT EXISTS `MyWorkflowApp`.`M01_USER` (
  `USERID` INT NOT NULL AUTO_INCREMENT,
  `USERNAME` VARCHAR(45) NULL,
  `PHONENO` INT NULL,
  `APPLICATIONOWNER` VARCHAR(45) NULL,
  `AOCONTACTNO` VARCHAR(45) NULL,
  PRIMARY KEY (`USERID`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
