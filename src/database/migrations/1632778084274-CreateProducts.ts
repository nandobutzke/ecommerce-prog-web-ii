import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1632778084274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'stock',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'price',
                        type: 'float',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
