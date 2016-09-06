python -m grpc.tools.protoc  --python_out=. --grpc_python_out=. --proto_path=. Calc.proto
cp Calc_pb2.py ../Server
cp Calc_pb2.py ../Client/Python
cp Calc.proto ../Client/Node