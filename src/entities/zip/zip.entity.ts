import { ObjectId } from 'mongodb'
import { PrimaryKey, SerializedPrimaryKey, Property, Entity } from '@mikro-orm/core'
import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
@Entity({ tableName: 'Zips' })
export default class Zip {
  @PrimaryKey()
  public _id!: ObjectId

  @Field({ nullable: true })
  @SerializedPrimaryKey()
  public id!: string

  @Field({ nullable: true })
  @Property()
  public city: string

  @Field(() => [Number], { nullable: true })
  @Property()
  public loc: number[]

  @Field({ nullable: true })
  @Property()
  public pop: number

  @Field({ nullable: true })
  @Property()
  public state: string
}