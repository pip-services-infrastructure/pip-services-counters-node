import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';

import { CountersMemoryPersistence } from '../persistence/CountersMemoryPersistence';
import { CountersMongoDbPersistence} from '../persistence/CountersMongoDbPersistence';
import { CountersController } from '../logic/CountersController';
import { CountersHttpServiceV1 } from '../services/version1/CountersHttpServiceV1';

export class CountersServiceFactory extends Factory {
	public static Descriptor = new Descriptor("pip-services-counters", "factory", "default", "default", "1.0");
	public static MemoryPersistenceDescriptor = new Descriptor("pip-services-counters", "persistence", "memory", "*", "1.0");
	public static MongoDbPersistenceDescriptor = new Descriptor("pip-services-counters", "persistence", "mongodb", "*", "1.0");
	public static ControllerDescriptor = new Descriptor("pip-services-counters", "controller", "default", "*", "1.0");
	public static HttpServiceDescriptor = new Descriptor("pip-services-counters", "service", "http", "*", "1.0");
	
	constructor() {
		super();
		this.registerAsType(CountersServiceFactory.MemoryPersistenceDescriptor, CountersMemoryPersistence);
		this.registerAsType(CountersServiceFactory.MongoDbPersistenceDescriptor, CountersMongoDbPersistence);
		this.registerAsType(CountersServiceFactory.ControllerDescriptor, CountersController);
		this.registerAsType(CountersServiceFactory.HttpServiceDescriptor, CountersHttpServiceV1);
	}
	
}
