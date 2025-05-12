import { FC } from 'react';

export interface OutbrainWidgetProps {
  dataSrc: string;
  dataWidgetId: string;
  obUserId?: string;
  obInstallationKey?: string;
  obInstallationType?: string;
  obAppVer?: string;
  isSecured?: string;
  obContentUrl?: string | null;
  obPortalUrl?: string | null;
  obBundleUrl?: string | null;
  obLanguage?: string | null;
  obPsub?: string | null;
  obAppId?: string | null;
  externalId?: string | null;
  obDarkMode?: string | null;
}

export const OutbrainWidget: FC<OutbrainWidgetProps>;
