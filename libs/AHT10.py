from maix import i2c
import time

class AHT10:
    def __init__(self, address = 0x38):
        self.i2c = i2c.I2C("/dev/i2c-2", address)
        self.i2c.write(0xE1, bytes([0x08, 0x00]))

    def read(self):
        self.i2c.write(0xAC, bytes([0x33, 0x00]))
        data = self.i2c.ioctl_read(0x00, 6)
        temp = ((data[3] & 0x0F) << 16) | (data[4] << 8) | data[5]
        temp = temp * 200 / 1048576 - 50
        humid = ((data[1] << 16) | (data[2] << 8) | data[3]) >> 4
        humid = humid * 100 / 1048576
        return temp, humid

    def readData(self, datatype):
        if datatype == "temp":
            return self.read()[0]
        elif datatype == "humid":
            return self.read()[1]
