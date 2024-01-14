export const Pricing = () => {
    return (
<div>
<div className="pricing__container" id="pricing">
<h1 className="pricing__header">Our pricing</h1>
<div className="pricing__content-container">
  <div className="pricing__option--single">
    <div className="pricing__content">
      <h3 className="pricing__content-header">Single photo price</h3>
      <div className="pricing__value-container">
        <p>$10</p>
      </div>
      <div className="pricing__description-container">
        <ul className="pricing__description pricing__description-minus">
          <li>Already taken</li>
          <li>No modification</li>
          <li>Single use</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="pricing__option--pack">
    <div className="pricing__content">
      <h3 className="pricing__content-header">Pack photo price</h3>
      <div className="pricing__value-container">
        <p>$200</p>
      </div>
      <div className="pricing__description-container">
        <ul className="pricing__description pricing__description-minus">
          <li>Already taken</li>
          <li>No modification</li>
          <li>Single use</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="pricing__option--custom">
    <div className="pricing__content">
      <h3 className="pricing__content-header">Photo custom price</h3>
      <div className="pricing__value-container">
        <p>Call us</p>
      </div>
      <div className="pricing__description-container">
        <ul className="pricing__description pricing__description-plus">
          <li>Taken or new</li>
          <li>Modifications</li>
          <li>Multi use</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
</div>  )
}

