import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Warehouse } from './Warehouse'
import { Product } from './Product'

enum TransactionType {
  RECEIVE,
  WITHDRAW
}

@Entity()
export class InventoryTransaction {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  date: Date

  @Column()
  quantity: number

  @Column()
  type: TransactionType

  // InventoryTransaction has one Warehouse
  @ManyToOne(() => Warehouse, warehouse => warehouse.inventoryTransactions, { nullable: false })
  warehouse: Warehouse

  // InventoryTransaction has one Product
  @ManyToOne(() => Product, product => product.inventoryTransactions, { nullable: false })
  product: Product

}