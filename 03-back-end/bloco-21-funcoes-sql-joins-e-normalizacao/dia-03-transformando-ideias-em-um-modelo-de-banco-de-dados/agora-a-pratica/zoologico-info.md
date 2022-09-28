# Zoologico Info Database

## Identificação das **Entidades**:

- Entidade 1: `Animal`;
- Entidade 2: `Cuidador`;
- Entidade 3: `Gerente`;
- Entidade 4: `Cuidador e Animal`;

## Identificação dos **Atributos**:

- Animal: `animal_id`, `nome`, `especie`, `sexo`, `idade` e `localização`;
- Cuidador: `cuidador_id`, `nome`, `gerente_id`;
- Gerente: `gerente_id` e `nome`;
- Cuidador e Animal: `cuidador_id` e `animal_id`;

## Identificar os **Relacionamentos**:

- Um animal pode ter um ou mais cuidadores;
- Um cuidador pode cuidar de um ou mais animais;
- Um gerente pode gerenciar uma ou mais cuidadores;
- Um cuidador possui um gerente;

| ![Diagrama de relacionamentos do banco de dados Zoológico](https://trybe-production-s3-content-object-service.s3.amazonaws.com/prod/content_object_service/images/Diagrama%20de%20relacionamentos%20do%20banco%20de%20dados%20Zool%C3%B3gico.png) |
| :----------------------------------------------------------: |
|  Diagrama de relacionamentos do banco de dados `Zoológico`   |

| ![Diagrama de relacionamentos detalhados das tabelas gerente, cuidador, animal e animal_cuidador](https://trybe-production-s3-content-object-service.s3.amazonaws.com/prod/content_object_service/images/Diagrama%20de%20relacionamentos%20detalhados%20das%20tabelas%20gerente,%20cuidador,%20animal%20e%20animal_cuidador.png) |
| :----------------------------------------------------------: |
| Diagrama de relacionamentos detalhados das tabelas gerente, `cuidador`, `animal` e `animal_cuidador` |

----

