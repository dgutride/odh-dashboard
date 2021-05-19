import React from 'react';
import * as classNames from 'classnames';
import { CardTitle, Tooltip } from '@patternfly/react-core';
import { ODHApp } from '../types';
import { isRedHatSupported } from '../utilities/utils';
import { IMAGE_URL } from '../utilities/const';

type SupportedAppTitleProps = {
  odhApp: ODHApp;
  showProvider?: boolean;
};

const SupportedAppTitle: React.FC<SupportedAppTitleProps> = ({ odhApp, showProvider = false }) => {
  const supportedImageClasses = classNames('odh-card__supported-image', {
    'm-hidden': !isRedHatSupported(odhApp),
  });
  return (
    <CardTitle>
      <span className="odh-card__title-supported">
        {odhApp.spec.displayName}
        <Tooltip content="Red Hat certified and supported">
          <img
            className={supportedImageClasses}
            src={IMAGE_URL ? `${IMAGE_URL}/images/CheckStar.svg` : '../images/CheckStar.svg'}
            alt="Red Hat certified and supported"
          />
        </Tooltip>
      </span>
      {showProvider && odhApp.spec.provider ? (
        <div>
          <span className="odh-card__provider">by {odhApp.spec.provider}</span>
        </div>
      ) : null}
    </CardTitle>
  );
};

export default SupportedAppTitle;
