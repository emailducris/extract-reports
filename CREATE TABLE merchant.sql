CREATE TABLE merchant (
    id INT PRIMARY KEY,
    idClient INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    brand VARCHAR(50),
    visa VARCHAR(50),
    master VARCHAR(50)
);


-- Inserir dados na tabela "merchant"
INSERT INTO merchant (idClient,name,master,visa)
VALUES
(3,'Unike','UNIKEGROUP',NULL),
(4,'Embraseg',NULL,'ON08004491027-483044-000000083551883'),
(8,'Wsb',NULL,'WSB-485085-161718080'),
(9,'Meta',NULL,'MET4-485085-161718448'),
(19,'AllSolution',NULL,'ALLSOLUTIONS-485085-175294905'),
(64,'oktapay','oktapay-56623','OKTAPAY-489427-012853767'),
(64,'oktapay',NULL,'CPPROMO-485085-197431028'),
(65,'onsolution',NULL,'ONSOLUTIONS-485085-794956357'),
(67,'abmex','ABMEX-56623','ABMEX-485085-196975207'),
(68,'papagaiodev','papagaiodev-56623',NULL),
(68,'papagaiodev','Papagaio-56623',NULL),
(69,'nextionpay','NEXTIONPAY-56623','NEXTIONPAY-489427-012713246'),
(70,'fenixpay','EverestGroup',NULL),
(70,'fenixpay',NULL,'EVEREST-489427-012713248'),
(70,'fenixpay','FENIX-56623','EVEREST-485085-191496376'),
(71,'nexuspay','NEXUSPAY-56623'),
(72,'lastpay','LASTPAY-56623','LASTPAY-489427-012829132'),
(73,'cardclub',NULL,'CARDCLUB-485085-793316386'),
(74,'cowobr',NULL,'COWOBR-485085-794365489'),
(75,'ativopay','ATIVOPAY-56623','ATIVOPAY-489427-012853765'),
(76,'tudomax','TUDOMAX-56623','TUDOMAX-489427-12853764'),
(77,'beehive','BEEHIVE-56623','BEEHIVE-489427-012935926'),
(78,'vibecash','VIBECASH-56623','VIBECASH-489427-012853766'),
(79,'tmj','TMJ-56623',NULL),
(80,'cashtime','CASHTIME-56623',NULL),
(81,'avizz','AVIZZ-56623','AVIZZ-489427-012713245'),
(81,'avizz',NULL,'AVIZZBR-448768-000002891511624'),
(81,'avizz',NULL,'AVIZZBR-479335-000002891511624'),
(83,'kirvano','KIRVANO-56623',NULL),
(84,'kalyst','KALYST-56623',NULL),
(85,'ultralinks','ULTRALINKS-56623','ULTRALINKS-485085-IPAG_155700'),
(86,'fastpay','FASTPAY-56623',NULL),
(89,'tryplo','TRYPLO-56623','TRYPLO-489427-013322095'),
(92,'vibex','VIBX-56623','VIBX-489427-013322096'),
(94,'octuspay','OCTUSPAY-56623','Octuspay-449216-R0FFXB4QTLHMM2S'),
(94,'octuspay',NULL,'Octuspay-401134-R0FFXB4QTLHMM2S'),
(95,'zouti','ZOUTI-56623',NULL),
(96,'cursobeta','CURSOBETA-56623','CURSOBETA-489427-012713250'),
(96,'cursobeta',NULL,'CURSOBETA-479335-000002891511659'),
(97,'paypi','PAYPI-56623',NULL);


