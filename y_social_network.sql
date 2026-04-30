SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `y_social_network`
--

-- --------------------------------------------------------

--
-- Schema for the `users` table
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `day_of_birth` date NOT NULL,
  `gender` varchar(20) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Inserting data into the `users` table
--

INSERT INTO `users` (`id`, `name`, `surname`, `day_of_birth`, `gender`, `email`, `password`) VALUES
(1, 'Leonardo', 'Andrade', '2005-01-26', 'Masculino', 'Arroz@email.com', 223456789),
(2, 'Julia', 'An', '2007-05-31', 'Feminino', 'Tomate@email.com', 123456789),
(3, 'Mário', 'Aquele', '1979-01-10', 'Masculino', 'Mario.QueComeuAtrasDoArmario@email.com', 0),
(4, 'João', 'Oliveira', '2007-03-15', 'Feminino', 'JoaoOliveira@email.com', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes on the `users` table
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_index` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for the `users` table
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
