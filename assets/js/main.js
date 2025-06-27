const courses = [
  {
    id: 1,
    title: "دوره آموزش وب",
    category: "وب",
    price: "۲ میلیون تومان",
    description: "این دوره مقدماتی تا پیشرفته طراحی و توسعه وب را آموزش می‌دهد.",
    image: "/assets/images/dore/programming.svg",
    durationTotal: "۶۰ ساعت",
    durationTime: "۲ ساعت",
    installment: true
  },
  {
    id: 2,
    title: "دوره آموزش گرافیک",
    category: "گرافیک",
    price: "۱.۵ میلیون تومان",
    description: "در این دوره مهارت‌های طراحی گرافیکی و نرم‌افزارهای مرتبط را می‌آموزید.",
    image: "/assets/images/dore/programming.svg",
    durationTotal: "۴۵ ساعت",
    durationTime: "۱.۵ ساعت",
    installment: false
  },
  {
    id: 3,
    title: "دوره برنامه‌نویسی جاوااسکریپت",
    category: "برنامه‌نویسی",
    price: "۳ میلیون تومان",
    description: "یادگیری جاوااسکریپت از پایه تا سطح پیشرفته و پروژه محور.",
    image: "/assets/images/dore/programming.svg",
    durationTotal: "۷۰ ساعت",
    durationTime: "۲.۵ ساعت",
    installment: true
  },
  // می‌تونی اینجا دوره‌های بیشتر اضافه کنی
];

// تابع ساخت کارت HTML برای هر دوره
function createCourseCard(course) {
  const card = document.createElement("div");
  card.classList.add("course-card");

  card.innerHTML = `
    <div class="course-image-wrapper">
      <img src="${course.image}" alt="دوره ${course.title}" />
      <span class="course-category-badge">${course.category}</span>
    </div>
    <div class="course-header">
      <h3 class="course-title">${course.title}</h3>
      <span class="course-price-badge">${course.price}</span>
    </div>
    <p class="course-description">${course.description}</p>
    <div class="course-info-badges">
      <span class="course-duration-total">مدت کل: ${course.durationTotal}</span>
      <span class="course-duration-time">زمان هر جلسه: ${course.durationTime}</span>
    </div>
    <span class="course-payment-badge ${course.installment ? 'installment' : 'cash'}">${course.installment ? 'اقساطی' : 'نقدی'}</span>
    <button class="course-details-btn" onclick="alert('نمایش جزئیات دوره: ${course.title}')">نمایش جزئیات</button>
  `;

  return card;
}

function renderCourses(coursesArray) {
  const container = document.getElementById("coursesContainer");
  container.innerHTML = ""; // پاک کردن محتوای قبلی

  coursesArray.forEach(course => {
    const card = createCourseCard(course);
    container.appendChild(card);
  });
}

// رندر اولیه همه دوره‌ها
renderCourses(courses);

// فیلترهای ساده (جستجو، دسته‌بندی و اقساطی/نقدی)

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const installmentFilter = document.getElementById("installmentFilter");

function filterCourses() {
  const searchText = searchInput.value.trim().toLowerCase();
  const categoryValue = categoryFilter.value;
  const installmentValue = installmentFilter.value;

  const filtered = courses.filter(course => {
    const matchSearch = course.title.toLowerCase().includes(searchText);
    const matchCategory = categoryValue === "all" || course.category === categoryValue;
    const matchInstallment = installmentValue === "all" || (installmentValue === "true" ? course.installment : !course.installment);

    return matchSearch && matchCategory && matchInstallment;
  });

  renderCourses(filtered);
}

searchInput.addEventListener("input", filterCourses);
categoryFilter.addEventListener("change", filterCourses);
installmentFilter.addEventListener("change", filterCourses);
