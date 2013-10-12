-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 01, 2012 at 12:09 PM
-- Server version: 5.1.36
-- PHP Version: 5.3.0

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `elite_search`
--

-- --------------------------------------------------------

--
-- Table structure for table `search`
--

CREATE TABLE IF NOT EXISTS `search` (
  `id` tinyint(4) NOT NULL,
  `title` varchar(255) NOT NULL,
  `sum` text NOT NULL,
  `content` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `category` text NOT NULL,
  `url` varchar(255) NOT NULL,
  `thumb` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `search`
--

INSERT INTO `search` (`id`, `title`, `sum`, `content`, `author`, `category`, `url`, `thumb`, `date`) VALUES
(1, 'Lorem ipsum dolor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper mattis quam id lobortis. Nullam pharetra...', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper mattis quam id lobortis. Nullam pharetra, nisi at vestibulum vehicula, mi sapien congue dui, sed tincidunt urna enim sed erat. Nullam porta porttitor nisi id blandit. Vestibulum ac turpis mi. Ut consectetur urna at eros vulputate scelerisque. Phasellus at diam accumsan sem varius congue at non ante. Aenean sodales commodo libero. Donec placerat lacinia blandit. Suspendisse vel quam et enim vehicula rutrum. Integer dapibus purus sed orci facilisis sed imperdiet dui consequat. Sed dapibus elementum blandit. Donec tincidunt purus nec diam rhoncus vel venenatis ligula iaculis. Integer sed nulla nibh, id hendrerit ligula. Vestibulum ullamcorper, leo at vulputate vulputate, sapien lectus imperdiet lacus, sed posuere libero odio ac nisl. Aliquam posuere lorem vitae dolor tempus quis feugiat nulla accumsan. ', 'Admin', 'Envato, Templates, Admin', '#', 'images/uploads/img1-thumb.jpg', '2011-05-26 04:49:46'),
(2, 'Nulla est mi', 'Nulla est mi, iaculis in tincidunt eu, facilisis ut neque. Morbi ac elit a metus commodo mattis. Nulla laoreet turpis ac nisi mollis semper...', 'Nulla est mi, iaculis in tincidunt eu, facilisis ut neque. Morbi ac elit a metus commodo mattis. Nulla laoreet turpis ac nisi mollis semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mauris et magna malesuada blandit. Quisque libero dolor, ultricies eget mattis non, cursus a turpis. Aliquam ut dui quam, nec commodo arcu. In hac habitasse platea dictumst. Etiam luctus sapien non justo dapibus aliquam eu in turpis. Proin elementum interdum velit vel pretium. Mauris quis scelerisque elit. ', 'Admin', 'HTTL5, CSS3, jQuery, JavaScript', '#', 'images/uploads/img2-thumb.jpg', '2011-05-26 15:49:56'),
(3, 'Duis commodo augue', 'Duis commodo augue at justo ultrices tincidunt. Pellentesque enim nisi, adipiscing nec gravida eu, pharetra vitae massa. Aliquam et ligula...', 'Duis commodo augue at justo ultrices tincidunt. Pellentesque enim nisi, adipiscing nec gravida eu, pharetra vitae massa. Aliquam et ligula vel arcu dignissim rutrum. Pellentesque id neque ut purus luctus varius. Quisque non nisl eget nisi eleifend bibendum at sed felis. Etiam lobortis eleifend ipsum nec hendrerit. Morbi dignissim ante adipiscing sapien hendrerit pretium. In sagittis dictum arcu a venenatis. Morbi sed ante eu ante placerat interdum at vel tortor. Pellentesque lacinia molestie lectus, eget suscipit urna aliquam sit amet. Nullam molestie metus quis erat porttitor a ultrices sem tincidunt. Nam eu arcu ligula. Morbi sit amet lacus quis purus consequat ultrices a nec est. Vestibulum bibendum neque elementum enim fermentum sit amet faucibus sapien rhoncus. Maecenas ligula turpis, fringilla in accumsan vitae, bibendum nec arcu. Sed a tristique quam. ', 'John Doe', 'Freelance, Developer', '#', 'images/uploads/img3-thumb.jpg', '2011-05-28 10:40:40'),
(4, 'Sed interdum sem non', 'Sed interdum sem non turpis mattis ullamcorper nec consequat neque. In vitae libero ut nisi egestas imperdiet quis vel nibh...', 'Sed interdum sem non turpis mattis ullamcorper nec consequat neque. In vitae libero ut nisi egestas imperdiet quis vel nibh. Aliquam facilisis sagittis nulla, id dapibus nulla convallis in. Cras fringilla tempus ante, ac eleifend tellus venenatis eu. Sed facilisis, nisl vitae sagittis eleifend, mi sem lacinia mauris, in elementum dui diam sit amet neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae diam tortor, vitae vestibulum libero. Aenean non nisi augue, eu sagittis ligula. Quisque rhoncus augue vel erat accumsan volutpat. Praesent sollicitudin, augue mollis rhoncus tristique, lectus sem ornare nibh, rutrum molestie lectus erat ut tortor. Integer facilisis tincidunt nunc sed accumsan. Mauris quis tellus urna, ut sollicitudin libero. ', 'Jessica Tribble', 'Support', '#', 'images/uploads/img4-thumb.jpg', '2011-06-29 08:10:45'),
(5, 'Morbi sed ante eu ante', 'Morbi sed ante eu ante placerat interdum at vel tortor. Pellentesque lacinia molestie lectus, eget suscipit urna aliquam sit amet...', 'Morbi sed ante eu ante placerat interdum at vel tortor. Pellentesque lacinia molestie lectus, eget suscipit urna aliquam sit amet. Nullam molestie metus quis erat porttitor a ultrices sem tincidunt. Nam eu arcu ligula. Morbi sit amet lacus quis purus consequat ultrices a nec est. Vestibulum bibendum neque elementum enim fermentum sit amet faucibus sapien rhoncus. Maecenas ligula turpis, fringilla in accumsan vitae, bibendum nec arcu. Sed a tristique quam. ', 'Jim Johnson', 'Development, Wireframing, Concept, Mobile', '#', 'images/uploads/img5-thumb.jpg', '2011-06-29 08:12:11'),
(6, 'Nunc vitae diam tortor', 'Nunc vitae diam tortor, vitae vestibulum libero. Aenean non nisi augue, eu sagittis ligula...', 'Nunc vitae diam tortor, vitae vestibulum libero. Aenean non nisi augue, eu sagittis ligula. Quisque rhoncus augue vel erat accumsan volutpat. Praesent sollicitudin, augue mollis rhoncus tristique, lectus sem ornare nibh, rutrum molestie lectus erat ut tortor. Integer facilisis tincidunt nunc sed accumsan. Mauris quis tellus urna, ut sollicitudin libero. ', 'Admin', 'Database development', '#', 'images/uploads/img6-thumb.jpg', '2011-07-02 01:15:55'),
(7, 'Nullam tempus enim et purus', 'Nullam tempus enim et purus vulputate consectetur. Nam suscipit dapibus dictum. Nam consectetur semper semper...', 'Nullam tempus enim et purus vulputate consectetur. Nam suscipit dapibus dictum. Nam consectetur semper semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ornare purus ac dolor scelerisque eget dignissim magna ultrices. Morbi quis dapibus leo. Fusce ullamcorper, sem vitae vehicula mattis, lectus felis cursus tellus, sit amet porttitor sapien tortor quis tortor. Proin ligula libero, posuere non scelerisque nec, ullamcorper in sapien. ', 'John Doe', 'Information, Website', '#', 'images/uploads/img7-thumb.jpg', '2011-11-20 14:06:24'),
(8, 'Pellentesque enim nisi', 'Pellentesque enim nisi, adipiscing nec gravida eu, pharetra vitae massa. Aliquam et ligula vel arcu...', 'Pellentesque enim nisi, adipiscing nec gravida eu, pharetra vitae massa. Aliquam et ligula vel arcu dignissim rutrum. Pellentesque id neque ut purus luctus varius. Quisque non nisl eget nisi eleifend bibendum at sed felis. Etiam lobortis eleifend ipsum nec hendrerit. Morbi dignissim ante adipiscing sapien hendrerit pretium. In sagittis dictum arcu a venenatis. Morbi sed ante eu ante placerat interdum at vel tortor. Pellentesque lacinia molestie lectus, eget suscipit urna aliquam sit amet. Nullam molestie metus quis erat porttitor a ultrices sem tincidunt. Nam eu arcu ligula. Morbi sit amet lacus quis purus consequat ultrices a nec est. Vestibulum bibendum neque elementum enim fermentum sit amet faucibus sapien rhoncus. Maecenas ligula turpis, fringilla in accumsan vitae, bibendum nec arcu. Sed a tristique quam. ', 'Admin', 'Mobile', '#', 'images/uploads/img8-thumb.jpg', '2011-11-20 16:06:02'),
(9, 'In vitae libero ut', 'In vitae libero ut nisi egestas imperdiet quis vel nibh. Aliquam facilisis sagittis nulla, id dapibus nulla convallis in...', 'In vitae libero ut nisi egestas imperdiet quis vel nibh. Aliquam facilisis sagittis nulla, id dapibus nulla convallis in. Cras fringilla tempus ante, ac eleifend tellus venenatis eu. Sed facilisis, nisl vitae sagittis eleifend, mi sem lacinia mauris, in elementum dui diam sit amet neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae diam tortor, vitae vestibulum libero. Aenean non nisi augue, eu sagittis ligula. Quisque rhoncus augue vel erat accumsan volutpat. Praesent sollicitudin, augue mollis rhoncus tristique, lectus sem ornare nibh, rutrum molestie lectus erat ut tortor. ', 'Admin', 'Wireframing, Deploment', '#', 'images/uploads/img9-thumb.jpg', '2011-11-20 17:44:20'),
(10, 'Nullam tempus enim et purus', 'Nullam tempus enim et purus vulputate consectetur. Nam suscipit dapibus dictum. Nam consectetur semper semper. Class aptent taciti...', 'Nullam tempus enim et purus vulputate consectetur. Nam suscipit dapibus dictum. Nam consectetur semper semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ornare purus ac dolor scelerisque eget dignissim magna ultrices. Morbi quis dapibus leo. Fusce ullamcorper, sem vitae vehicula mattis, lectus felis cursus tellus, sit amet porttitor sapien tortor quis tortor. Proin ligula libero, posuere non scelerisque nec, ullamcorper in sapien. ', 'John Doe', 'WordPress, CMS, Content', '#', 'images/uploads/img10-thumb.jpg', '2011-11-20 17:45:01');