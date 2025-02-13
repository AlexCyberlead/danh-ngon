import React from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';

function App() {
  return (
    <div className="App">
      <div className="quotes-container">
        <QuoteCard
          image="/images/thanhcong01.jpg"
          tag="Sự nghiệp"
          quote="Trên con đường thành công sẽ không có dấu chân của những kẻ lười biếng."
          author="Brian Tracy"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong02.jpg"
          tag="Sự nghiệp"
          quote="Thành công không phải là đích đến, mà là cả một hành trình."
          author="Arthur Ashe"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong03.jpg"
          tag="Phát triển bản thân"
          quote="Đừng so sánh bản thân với người khác. Hãy so sánh với chính mình của ngày hôm qua."
          author="Jordan Peterson"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong04.jpg"
          tag="Thất bại"
          quote="Thất bại không phải là ngược lại với thành công, nó là một phần của thành công."
          author="Arianna Huffington"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong05.jpg"
          tag="Động lực"
          quote="Đừng chờ đợi cơ hội. Hãy tự tạo ra nó."
          author="Steve Jobs"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong06.jpg"
          tag="Học tập"
          quote="Học từ ngày hôm qua, sống cho ngày hôm nay, hy vọng cho ngày mai."
          author="Albert Einstein"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong07.jpg"
          tag="Khởi nghiệp"
          quote="Ý tưởng tốt nhất thường đến từ việc giải quyết vấn đề của chính bạn."
          author="Mark Zuckerberg"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong08.jpg"
          tag="Lãnh đạo"
          quote="Lãnh đạo không phải là về việc trở thành người giỏi nhất. Mà là về việc giúp người khác trở nên tốt hơn."
          author="Simon Sinek"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong09.jpg"
          tag="Sáng tạo"
          quote="Sáng tạo là trí thông minh đang vui chơi."
          author="Albert Einstein"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong10.jpg"
          tag="Kiên trì"
          quote="Người kiên trì sẽ chiến thắng người tài năng khi người tài năng từ bỏ."
          author="Winston Churchill"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong11.jpg"
          tag="Mục tiêu"
          quote="Mục tiêu không phải là để đạt được. Mà là để theo đuổi."
          author="Bruce Lee"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong12.jpg"
          tag="Thời gian"
          quote="Thời gian là thứ quý giá nhất bạn có thể tiêu. Hãy chắc chắn rằng bạn đang đầu tư nó một cách khôn ngoan."
          author="Warren Buffett"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong13.jpg"
          tag="Hạnh phúc"
          quote="Hạnh phúc không phải là điểm đến, mà là cách bạn đi."
          author="Wayne Dyer"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong14.jpg"
          tag="Thay đổi"
          quote="Thay đổi là quy luật của cuộc sống. Những người chỉ nhìn về quá khứ hay hiện tại chắc chắn sẽ bỏ lỡ tương lai."
          author="John F. Kennedy"
          year="2025"
        />
        <QuoteCard
          image="/images/thanhcong15.jpg"
          tag="Ước mơ"
          quote="Đừng để ước mơ chỉ là ước mơ. Hãy đặt ra thời hạn và biến nó thành kế hoạch."
          author="Walt Disney"
          year="2025"
        />
      </div>
    </div>
  );
}

export default App;
