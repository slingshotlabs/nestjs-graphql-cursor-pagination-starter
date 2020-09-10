import relayTypes from "./relay.types";
import Zip from "./entities/zip/zip.entity";
import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export default class ZipResponse extends relayTypes<Zip>(Zip) { }
