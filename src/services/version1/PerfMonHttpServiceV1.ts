import { Descriptor } from 'pip-services3-commons-node';
import { CommandableHttpService } from 'pip-services3-rpc-node';

export class PerfMonHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/perfmon');
        this._dependencyResolver.put('controller', new Descriptor('pip-services-perfmon', 'controller', 'default', '*', '1.0'));
    }
}