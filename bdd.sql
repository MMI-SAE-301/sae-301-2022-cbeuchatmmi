--
-- code pour la création des tables
--
CREATE TABLE Montre
(
idMontre uuid,
Ecran varchar,
Bracelet varchar,
Boitier varchar,
Commande boolean,
Forme varchar,
Forme int,
idMateriaux_bracelet uuid,
idMateriaux_boitier uuid,
idClient uuid,
Primary Key (idMontre),
Foreign Key (idMateriaux_bracelet) references Materiaux(idMateriaux),
Foreign Key (idMateriaux_boitier) references Materiaux(idMateriaux),
Foreign Key (idClient_commande) references Client(idClient),
Foreign Key (idClient_enregistrer) references Client(idClient)
);

CREATE TABLE Materiaux
(
idMateriaux uuid,
Libelle varchar,
Primary Key (idMateriaux)
);
CREATE TABLE Client
(
idClient uuid references auth.users not null,
Email varchar, 
Primary Key (idClient)
);






--
-- code pour la création des vues
--
create view listeMontre as
select "idclient", "idmontre","ecran","bracelet","idmateriaux_bracelet", "boitier", "idmateriaux_boitier"  from "montre";

create view listeMontreClient as
select "idclient", "idmontre", "idclient_commande"  from "montre";

--
-- code pour la création des policies
--
create policy "Les clients peuvent modifier leur montre"
on montre for update using (
uid() = user_id
);

create policy "Les clients peuvent supprimer leur montre"
on montre for delete using (
uid() = user_id
);

create policy "Seul les clients peuvent enregistrer leur montre"
ON montre FOR INSERT
TO authenticated
WITH CHECK (uid () in (Select "user_id" from user));




