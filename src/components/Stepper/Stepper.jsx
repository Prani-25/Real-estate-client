import './Stepper.css';

const steps = ['Basic Info', 'Property Detail', 'General Info', 'Location Info'];

const Stepper = ({ currentStep }) => {
  return (
    <>
    <h2 className='add-property'>ADD NEW PROPERTY</h2>
    <div className="stepper">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={index} className={`step ${isActive ? 'active' : isCompleted ? 'completed' : ''}`}>
            <div className="circle">{stepNumber}</div>
            <div className="label">{label}</div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Stepper;
