import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Faq extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <section className="faq-page-area pd-top-100 pd-bottom-100" id="cau-hoi">
        <div className="container">
          <div className="section-title text-center">
            <h3>Câu hỏi thường gặp </h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="faq-accordion accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header">
                    <h2>
                      <button
                        className="btn"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                      >
                        HỆ THỐNG HỌC TẬP DO CÔ HẰNG NGA XÂY DỰNG NHẰM
                        <span className="collapse-icon" />
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      👉 Hỗ trợ, kèm cặp, đôn đốc hàng ngày đối với học sinh
                      yếu.
                      <br />
                      👉 Hệ thống đưa người học 1 lộ trình học tập rõ ràng,
                      xuyên suốt, đều đặn và hiệu quả.
                      <br />
                      👉 Hệ thống xây dựng sự tự chủ cho người học.
                      <br />
                      👉 Hệ thống các lớp học sĩ số nhỏ, học sinh được kèm cặp
                      sát sao bởi giáo viên phụ trách.
                      <br />
                      👉 Hệ thống các lớp học được đồng nhất về giáo trình dạy,
                      tài liệu học, lộ trình phân bổ hàng ngày. Tất cả do Cô
                      Hằng Nga xây dựng.
                      <br />
                      👉 Hệ thống dưới sự giám sát vô cùng khắt khe, nghiêm khắc
                      bởi Cô Hằng Nga.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h2>
                      <button
                        className="btn collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                      >
                        HỆ THỐNG HỌC TẬP CỦA CÔ HẰNG NGA LUÔN CHÀO ĐÓN👏👏👏
                        <span className="collapse-icon" />
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      👉 Học sinh yếu chưa tìm ra cách học tập sao cho hiệu quả.
                      <br />
                      👉 Bố mẹ loay hoay cho con đi học nhiều buổi thậm chí
                      nhiều nơi mà vẫn không hiệu quả.
                      <br />
                      👉 Bố mẹ mong muốn thay đổi cách học tập của con mà chưa
                      tìm ra phương pháp.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h2>
                      <button
                        className="btn collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                      >
                        HỆ THỐNG HỌC TẬP CỦA CÔ HẰNG NGA XIN PHÉP TỪ CHỐI 👎👎👎
                        <span className="collapse-icon" />
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      👉 Học sinh hay nghỉ học, không có thiện chí học tập.
                      <br />
                      👉 Học sinh hay phá đám trong lớp.
                      <br />
                      👉 Phụ huynh ko quan tâm tới con, đi học giao phó hết cho
                      giáo viên.
                      <br />
                      👉 Phụ huynh hỏi đăng ký học nhiều lần, mỗi lần đăng ký
                      xong thì để đó, tham khảo đến ty tỷ chỗ học, giờ không còn
                      ai dạy nổi con của mình nữa thì tìm đến để được Cô Hằng
                      Nga hỗ trợ.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h2>
                      <button
                        className="btn collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                      >
                        ĐỂ THAM GIA VÀO HỆ THỐNG CÁC LỚP HỌC BÊN CÔ HẰNG  NGA.
                        <span className="collapse-icon" />
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      📩 Yêu cầu về phía học sinh tham gia học: Có thể học kém nhưng phải thiện chí học tập, có sự quyết tâm trong việc học, hoàn thành lộ trình học mỗi ngày 20 phút theo đúng yêu cầu của Cô Hằng Nga. <br />
                      📩 Yêu cầu về phía phụ huynh: Cần sát sao con, phối hợp cùng Cô để đôn đốc nhắc nhở con mỗi ngày và trong suốt quá trình theo học tại Hệ thống các lớp học của Cô Hằng Nga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
