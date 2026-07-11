const dishes = [
  { name: "炭烤小番茄宽面", desc: "手工宽面、慢炖番茄、布拉塔奶酪、罗勒", price: "¥88", tone: "tomato" },
  { name: "香草烤春鸡", desc: "散养鸡、烤时蔬、迷迭香原汁", price: "¥128", tone: "olive" },
  { name: "海盐焦糖布丁", desc: "法式焦糖、海盐、当季莓果", price: "¥46", tone: "cream" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="暖桌餐厅首页">
          <span className="brand-mark">暖</span>
          <span>暖桌<br /><small>TABLE &amp; TASTE</small></span>
        </a>
        <nav aria-label="主导航">
          <a href="#menu">菜单</a>
          <a href="#story">我们的故事</a>
          <a href="#visit">到店</a>
        </nav>
        <a className="outline-button" href="tel:021-62181208">预约座位 <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <img src="/restaurant-hero.png" alt="暖色餐桌上的手工宽面、面包与小食" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">邻里小馆 · 时令厨房</p>
          <h1>认真吃饭，<br />慢慢生活。</h1>
          <p className="hero-intro">用当季食材和恰到好处的火候，<br />做一桌让人想念的日常好味。</p>
          <div className="hero-actions">
            <a className="primary-button" href="#menu">看看菜单 <span>→</span></a>
            <a className="text-link" href="tel:021-62181208">预订今晚餐桌</a>
          </div>
        </div>
        <div className="open-card">
          <span className="status-dot" /> 今日营业
          <strong>11:30 — 22:00</strong>
          <small>厨房于 21:30 收餐</small>
        </div>
        <p className="scroll-note">向下，尝尝今日菜单 <span>↓</span></p>
      </section>

      <section className="intro" id="story">
        <div>
          <p className="section-kicker">我们相信</p>
          <h2>好味道，<br />从土地开始。</h2>
        </div>
        <div className="intro-copy">
          <p>每天清晨，我们从本地农场和菜市场挑选新鲜食材。菜单随四季更替，保留食物本来的味道，也保留一点惊喜。</p>
          <a className="arrow-link" href="#visit">认识暖桌 <span>↗</span></a>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <div><p className="section-kicker">今日推荐</p><h2>此刻，正好吃。</h2></div>
          <p>菜单会随市场供应微调<br />每一道都在店内新鲜制作</p>
        </div>
        <div className="dish-grid">
          {dishes.map((dish, index) => (
            <article className="dish-card" key={dish.name}>
              <div className={`dish-art ${dish.tone}`} aria-hidden="true">
                <span className="plate"><i /></span>
                <b>0{index + 1}</b>
              </div>
              <div className="dish-info">
                <div><h3>{dish.name}</h3><p>{dish.desc}</p></div>
                <strong>{dish.price}</strong>
              </div>
            </article>
          ))}
        </div>
        <a className="menu-link" href="tel:021-62181208">获取完整菜单 <span>→</span></a>
      </section>

      <section className="visit" id="visit">
        <div className="visit-copy">
          <p className="section-kicker light">来坐坐</p>
          <h2>一张桌，<br />等你入座。</h2>
          <p>上海市静安区安福路 118 号<br />地铁 10 / 11 号线交通大学站步行 8 分钟</p>
          <a className="primary-button cream-button" href="tel:021-62181208">电话预约 021 6218 1208</a>
        </div>
        <div className="hours">
          <p>营业时间</p>
          <dl><div><dt>周一至周五</dt><dd>11:30 — 14:30<br />17:30 — 22:00</dd></div><div><dt>周六、周日</dt><dd>11:30 — 22:00</dd></div></dl>
        </div>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">暖</span><span>暖桌</span></a><p>© 2026 暖桌餐厅 · 把每顿饭，过成好日子</p><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}
