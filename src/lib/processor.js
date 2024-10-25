class Processor {
  // Kiểm tra xem chuỗi có phải là chuỗi nhị phân không
  static kiemTraBit(duLieu) {
    return /^[01]+$/.test(duLieu);
  }

  // Hàm tính số dư CRC
  static getCRC(data1, divisor) {
    const data2 = data1 + "0".repeat(divisor.length - 1);
    return this.chiaCRC(data2, divisor);
  }

  // Hàm chia modulo-2
  static chiaCRC(data1, divisor) {
    const m = divisor.length;
    const n = data1.length;
    let chiaModulo2 = data1.split("");
    for (let i = 0; i <= n - m; i++) {
      if (chiaModulo2[i] === "1") {
        for (let j = 0; j < m; j++) {
          chiaModulo2[i + j] = chiaModulo2[i + j] === divisor[j] ? "0" : "1";
        }
      }
    }
    return chiaModulo2.slice(n - m + 1).join("");
  }

  // Hàm tạo dữ liệu để gửi
  static dataSend(data1, divisor) {
    const CRC = this.getCRC(data1, divisor);
    return data1 + CRC;
  }

  // Hàm khôi phục dữ liệu khi dữ liệu nhận đúng
  static dataReceive(data3, divisor) {
    return data3.substring(0, data3.length - (divisor.length - 1));
  }

  // Hàm kiểm tra dữ liệu nhận
  static checkCRC(data3, divisor) {
    const R = this.chiaCRC(data3, divisor);
    return R === "0".repeat(divisor.length - 1);
  }
}
export default Processor;
