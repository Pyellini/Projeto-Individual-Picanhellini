create database Picanhellini;
use Picanhellini;
select*from cadastro;
create table cadastro (
idCadastro int primary key auto_increment,
Nome varchar(45),
email varchar(80), 
constraint chkEmail check(email like('@','.com')),
Telefone char(11),
Token varchar(45));
desc cadastro;
select*from cadastro;
create table likes(
idLike int primary key auto_increment,
LikePicanha int, 
LikeCostela int,
LikeCupim int,
LikeAcem int,
LikeAbacaxi int,
LikePao int,
fkUsuario int, foreign key (fkUsuario)references cadastro(idCadastro)
);
select*from likes;

select videos.picanha, videos.Tbone, videos.Costela, videos.Cupim from videos;
drop table likes;

select sum(picanha) as picanha from videos;
select sum(Tbone) as Tbone from videos;
select sum(Costela) as Costela from videos;
select sum(Cupim) as Cupim from videos;


select sum(picanha) as Picanha, sum(Tbone) as Tbone,  sum(Costela) as Costela, sum(Cupim) as Cupim from videos where fkUser = 1;

create table videos(
idclick int primary key auto_increment,
Picanha int,
Tbone int,
Costela int,
Cupim int,
MalPassado int,
AoPonto int,
BemPassado int,
fkUser int, foreign key (fkUser) references cadastro(idcadastro)
);
select*From videos;
select sum(picanha) from videos;
select*from cadastro;

create table avaliacao(

);
create table duvidas (
idDuvida int primary key auto_increment,
tipo char(3),
Descricao varchar(90),
fkPessoa int, constraint fkPessoa foreign key(fkPessoa)references cadastro(idCadastro)
);

create table respostas (
idRespostas int primary key auto_increment,
pergunta1 varchar(45),
pergunta2 varchar(45),
pergunta3 varchar(45),
pergunta4 varchar(45),
pergunta5 varchar(45),
pergunta6 varchar(45),
pergunta7 varchar(45),
pergunta8 varchar(45),
pergunta9 varchar(45),
pergunta10 varchar(45),
pergunta11 varchar(45),
pergunta12 varchar(45),
pergunta13 varchar(45),
pergunta14 varchar(45),
pergunta15 varchar(45),
pergunta16 varchar(45),
pergunta17 varchar(45),
pergunta18 varchar(45),
pergunta19 varchar(45),
pergunta20 varchar(45),
fkUser int, constraint fkUser foreign key (fkUser) references cadastro(idCadastro)
);





