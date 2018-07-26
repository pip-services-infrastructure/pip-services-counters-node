"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_benchmark_node_1 = require("pip-benchmark-node");
const pip_benchmark_node_2 = require("pip-benchmark-node");
const AddMongoDbCountersBenchmark_1 = require("./AddMongoDbCountersBenchmark");
class PerfMonBenchmarkSuite extends pip_benchmark_node_1.BenchmarkSuite {
    constructor() {
        super("PerfMon", "PerfMon Counters benchmark");
        this.addParameter(new pip_benchmark_node_2.Parameter('InitialRecordNumber', 'Number of records at start', '0'));
        this.addParameter(new pip_benchmark_node_2.Parameter('SourceQuantity', 'Count of sources', '10'));
        this.addParameter(new pip_benchmark_node_2.Parameter('StartTime', 'Simulation start time', '2016-01-01T00:00:00.000Z'));
        this.addParameter(new pip_benchmark_node_2.Parameter('Interval', 'Simulation interval', '5000'));
        this.addParameter(new pip_benchmark_node_2.Parameter('MongoUri', 'MongoDB URI', null));
        this.addParameter(new pip_benchmark_node_2.Parameter('MongoHost', 'MongoDB Hostname', 'localhost'));
        this.addParameter(new pip_benchmark_node_2.Parameter('MongoPort', 'MongoDB Port', '27017'));
        this.addParameter(new pip_benchmark_node_2.Parameter('MongoDb', 'MongoDB Database', 'benchmark'));
        this.addBenchmark(new AddMongoDbCountersBenchmark_1.AddMongoDbCountersBenchmark());
    }
}
exports.PerfMonBenchmarkSuite = PerfMonBenchmarkSuite;
//# sourceMappingURL=PerfMonBenchmarkSuite.js.map