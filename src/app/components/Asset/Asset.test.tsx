import { SVGProps } from 'react';
import { render, screen } from '@testing-library/react';

import { Asset } from './Asset';

describe('Asset component', () => {
  const defaultProps = {
    description: 'test description',
    height: 20,
    width: 20,
    icon: (props: SVGProps<SVGSVGElement>): JSX.Element => <svg {...props} />
  };

  it('should render correctly', () => {
    render(<Asset {...defaultProps} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('height', '20');
    expect(screen.getByRole('img')).toHaveAttribute('width', '20');
  });

  it('should have correct aria-label', () => {
    render(<Asset {...defaultProps} />);
    expect(screen.getByRole('img')).toHaveAttribute(
      'aria-label',
      'test description'
    );
  });

  it('should have correct className', () => {
    render(<Asset {...defaultProps} className="test-class" />);
    expect(screen.getByRole('img')).toHaveClass('test-class');
  });

  it('should have correct role attribute', () => {
    render(<Asset {...defaultProps} role="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
