Plane.create(name: "VHA-XFA", rows: 25, columns: 6)
Plane.create(name: "VHA-XFB", rows: 25, columns: 6)
Plane.create(name: "VHA-XFC", rows: 25, columns: 6)

Flight.create(flight_number: "VA100", date: "2015-01-01", origin: "SYD", destination: "MEL", plane_id:"1")
Flight.create(flight_number: "VA200", date: "2015-02-01", origin: "SYD", destination: "BNE", plane_id:"2")
Flight.create(flight_number: "VA300", date: "2015-03-07", origin: "MEL", destination: "BNE", plane_id:"3")