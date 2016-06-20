# node-xiaomi-scale

## MiScale class
### Constructor
constructor optionally accepts mac address string. If string is given, it only emits data from given address.

### MiScale.startScanning()
Start BLE scan and search for Mi scale.

### MiScale.stopScanning()
Stop BLE scan.

### MiScale.on('data', function cb(scale))
If nearby Mi Scale is scanned and if it met given criteria (matching mac address, not a duplicated entry), it emits its data using 'data' event.

#### scale.address
Bluetooth address of Mi Scale.

#### scale.svcUUID
Mi Scale service uuid.

#### scale.svcData
Raw Mi Scale service data.

#### scale.manufacturerData
Raw Mi Scale manufacturer data.

#### scale.isStabilized
If scale reading is stabilized, This flag will set to true.

#### scale.loadRemoved
If weight on scale is removed, This flag will set to true.

#### scale.unit
Measurement unit.

#### scale.sequence
Sequence number.
