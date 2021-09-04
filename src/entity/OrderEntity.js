const OrderEntity = require("typeorm").EntitySchema
module.exports = new OrderEntity({
    name: "OrderEntity",
    tableName: "orders",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        status: {
            type: "varchar(50)",
            nullable: false
        },
        id_client: {
            type: "int",
            nullable: false
        },
        id_store: {
            type: "int",
            nullable: false
        },
        relations: {
            categories: {
                target: "ClientEntity",
                type: "many-to-one",
                joinTable: true,
                cascade: false
            }
        }
    }
});

// create table pedidos (
//     id INT not null auto_increment,
//     status ENUM ('CRIANDO', 'REALIZADO', 'RETIRADO'),
//     id_cliente INT,
//     id_loja INT,
//     primary key (id),
//     foreign key (id_cliente) references clientes(id),
//     foreign key (id_loja) references lojas(id)
//     );