-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 26. 08:56
-- Kiszolgáló verziója: 10.4.24-MariaDB
-- PHP verzió: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `sky_fitness`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `edzesterv`
--

CREATE TABLE `edzesterv` (
  `edzestervId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `edzes_napok`
--

CREATE TABLE `edzes_napok` (
  `edzesnapokId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `edzestervEdzestervId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gyakorlat`
--

CREATE TABLE `gyakorlat` (
  `gyakorlatId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `media` varchar(255) NOT NULL,
  `description` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `gyakorlat`
--

INSERT INTO `gyakorlat` (`gyakorlatId`, `name`, `media`, `description`) VALUES
(1, 'Bicepsz karhajlítás állva kézi súlyzóval', 'https://www.youtube.com/watch?v=WpYcBunLieo', 'Ragadj meg egy pár kézi súlyzót és engedd le magad mellé! Fordítsd úgy a karjaid, hogy a tenyereid egymás felé nézzenek! Anélkül, hogy a felkarod elmozdítanád, hajlítsd be a könyököd, és ahogy emeled a súlyzót, közelítsd a vállaid felé!'),
(2, 'Kalapács bicepsz karhajlítás', 'https://www.youtube.com/watch?v=r07ANQZpdu8', 'Fogj egy pár kézi súlyzót és engedd le őket a tested mellé, úgy, hogy a tenyereid a combjaid felé nézzenek! A felkar elmozdulása nélkül hajlítsd be a könyököd és közelítsd a súlyzókat a vállaidhoz, amennyire csak tudod!'),
(3, 'Bicepszhajlítás rúddal', 'https://www.youtube.com/watch?v=Wss2VXkaa5w', 'A bicepszhajlítás rúddal az egyik legjobb tömegnövelő gyakorlat, egyszerűen azért, mert nagyon sok izmot igénybe vesznek csak a test stabilizálása miatt is. Ezt jól tudja illusztrálni az, ha elképzelsz valakit, aki nagyobb súllyal próbálja végezni.\r\n'),
(4, 'Kalapács ülve egykezes súlyzókkal, döntött padon', 'https://www.youtube.com/watch?v=8khW8pUvb3o', 'A könyék pozíciója miatt (hátra húzva, eltartva a testtől) a külső, hosszú feje a bicepsznek (ami a vállízület felett ered) végzi a munka jelentős részét.Ajánlott a bicepsz hosszú fejére nagyobb figyelmet szentelni, mivel az a leglátványosabb!\r\n'),
(5, 'Bicepsz Scott-padon egykezes súlyzókkal', 'https://www.youtube.com/watch?v=vwXkZqlgCFo', 'Scott preacher hajlítás gyakorlata kiváló bicepsz izolációt tett lehetővé és nagyszerűen erősítette a brachialis izmot. A brachialis a bicepsz alatt van, ami a szabályosan végrehajtott preacher hajlításnál a felkarba nyomja az izmot.\r\n'),
(6, 'Koncentrált bicepszgyakorlat ülve', 'https://www.youtube.com/watch?v=q_Qqt05NviM', 'A koncentrált bicepszhajlítás egy gyakran félreértett feladat, mivel sokan azt hiszik, hogy izomtömeg növelés helyett inkább a bicepszet csúcsosítja. Sajnos a bicepsz alakját a genetika határozza meg – mindenkinek lehet nagyobb karja.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gyakorlat_edzesnapok_edzes_napok`
--

CREATE TABLE `gyakorlat_edzesnapok_edzes_napok` (
  `gyakorlatGyakorlatId` int(11) NOT NULL,
  `edzesNapokEdzesnapokId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `izomcsoportok`
--

CREATE TABLE `izomcsoportok` (
  `izomcsoportokId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gyakorlatGyakorlatId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `token`
--

CREATE TABLE `token` (
  `token` varchar(255) NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `registrationDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_edzesterv_edzesterv`
--

CREATE TABLE `user_edzesterv_edzesterv` (
  `userId` int(11) NOT NULL,
  `edzestervEdzestervId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `edzesterv`
--
ALTER TABLE `edzesterv`
  ADD PRIMARY KEY (`edzestervId`);

--
-- A tábla indexei `edzes_napok`
--
ALTER TABLE `edzes_napok`
  ADD PRIMARY KEY (`edzesnapokId`),
  ADD KEY `FK_e81f90ab47a7c6862ae2bbda285` (`edzestervEdzestervId`);

--
-- A tábla indexei `gyakorlat`
--
ALTER TABLE `gyakorlat`
  ADD PRIMARY KEY (`gyakorlatId`);

--
-- A tábla indexei `gyakorlat_edzesnapok_edzes_napok`
--
ALTER TABLE `gyakorlat_edzesnapok_edzes_napok`
  ADD PRIMARY KEY (`gyakorlatGyakorlatId`,`edzesNapokEdzesnapokId`),
  ADD KEY `IDX_7912bd4eced7daea365e0e4205` (`gyakorlatGyakorlatId`),
  ADD KEY `IDX_0f22ce3b26e00dfd91d21eff0a` (`edzesNapokEdzesnapokId`);

--
-- A tábla indexei `izomcsoportok`
--
ALTER TABLE `izomcsoportok`
  ADD PRIMARY KEY (`izomcsoportokId`),
  ADD KEY `FK_106b114f6c46cf22bfccdae5c74` (`gyakorlatGyakorlatId`);

--
-- A tábla indexei `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`token`),
  ADD KEY `FK_94f168faad896c0786646fa3d4a` (`userId`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`),
  ADD UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`);

--
-- A tábla indexei `user_edzesterv_edzesterv`
--
ALTER TABLE `user_edzesterv_edzesterv`
  ADD PRIMARY KEY (`userId`,`edzestervEdzestervId`),
  ADD KEY `IDX_d2ab77e3da0960ac76ab2c2dba` (`userId`),
  ADD KEY `IDX_424a168de8dede882470fb0d2d` (`edzestervEdzestervId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `edzesterv`
--
ALTER TABLE `edzesterv`
  MODIFY `edzestervId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `edzes_napok`
--
ALTER TABLE `edzes_napok`
  MODIFY `edzesnapokId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `gyakorlat`
--
ALTER TABLE `gyakorlat`
  MODIFY `gyakorlatId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `izomcsoportok`
--
ALTER TABLE `izomcsoportok`
  MODIFY `izomcsoportokId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `edzes_napok`
--
ALTER TABLE `edzes_napok`
  ADD CONSTRAINT `FK_e81f90ab47a7c6862ae2bbda285` FOREIGN KEY (`edzestervEdzestervId`) REFERENCES `edzesterv` (`edzestervId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `gyakorlat_edzesnapok_edzes_napok`
--
ALTER TABLE `gyakorlat_edzesnapok_edzes_napok`
  ADD CONSTRAINT `FK_0f22ce3b26e00dfd91d21eff0a9` FOREIGN KEY (`edzesNapokEdzesnapokId`) REFERENCES `edzes_napok` (`edzesnapokId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_7912bd4eced7daea365e0e4205a` FOREIGN KEY (`gyakorlatGyakorlatId`) REFERENCES `gyakorlat` (`gyakorlatId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `izomcsoportok`
--
ALTER TABLE `izomcsoportok`
  ADD CONSTRAINT `FK_106b114f6c46cf22bfccdae5c74` FOREIGN KEY (`gyakorlatGyakorlatId`) REFERENCES `gyakorlat` (`gyakorlatId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `FK_94f168faad896c0786646fa3d4a` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `user_edzesterv_edzesterv`
--
ALTER TABLE `user_edzesterv_edzesterv`
  ADD CONSTRAINT `FK_424a168de8dede882470fb0d2d1` FOREIGN KEY (`edzestervEdzestervId`) REFERENCES `edzesterv` (`edzestervId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_d2ab77e3da0960ac76ab2c2dba3` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
