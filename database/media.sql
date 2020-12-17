-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 17, 2020 at 10:55 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flashback`
--

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
CREATE TABLE IF NOT EXISTS `media` (
  `id` tinyint(30) NOT NULL AUTO_INCREMENT,
  `mediatype` varchar(30) DEFAULT NULL,
  `title` varchar(30) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `thumb` varchar(30) DEFAULT NULL,
  `source` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `mediatype`, `title`, `description`, `thumb`, `source`) VALUES
(1, 'Video', 'Back To The Future', 'Marty travels back in time using an eccentric scientist\'s time machine. However, he must make his high-school-aged parents fall in love in order to return to the present.', 'movie1.jpg', 'placeholder.jpg'),
(2, 'Graphic', 'Pulp Fiction', 'In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster\'s wife, a boxer and two small-time criminals.', 'movie2.jpg', 'placeholder.jpg'),
(3, 'Audio', 'Jurassic Park', 'Jurassic Park is a 1993 American science fiction adventure film directed by Steven Spielberg and produced by Kathleen Kennedy and Gerald R. Molen.', 'movie3.jpg', 'placeholder.jpg'),
(4, 'Graphic', 'Jaws', 'A police chief, a marine scientist and a fisherman spring into action after a white shark terrorises the inhabitants of Amity, a quiet island.', 'movie4.jpg', 'placeholder.jpg'),
(5, 'Graphic', 'Raiders Of The Lost Arch', 'Archaeology professor Indiana Jones ventures to seize a biblical artefact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis.', 'movie5.jpg', 'placeholder.jpg'),
(6, 'Graphic', 'Ghostbusters', 'When Peter Venkman, Raymond Stantz and Egon Spengler lose their jobs as scientists, they start an establishment called Ghostbusters to fight the evil ghosts lurking in New York City.', 'movie6.jpg', 'placeholder.jpg'),
(7, 'Graphic', 'Fight Club', 'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.', 'movie7.jpg', 'placeholder.jpg'),
(8, 'Graphic', 'Die Hard I', 'Hoping to spend Christmas with his estranged wife, detective John McClane arrives in LA. However, he learns about a hostage situation in an office building and his wife is one of the hostages.', 'movie8.jpg', 'placeholder.jpg'),
(9, 'Graphic', 'Blade Runner', 'Rick Deckard, an ex-policeman, becomes a special agent with a mission to exterminate a group of violent androids. As he starts getting deeper into his mission, he questions his own identity.', 'movie9.jpg', 'placeholder.jpg'),
(10, 'Graphic', 'The Shining', 'Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.', 'movie10.jpg', 'placeholder.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
