'use client';
import React, { FC } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

type Props = {
  isDoctor: boolean;
  handleSwitchUser: () => void;
};

const SwitchUser: FC<Props> = ({ isDoctor, handleSwitchUser }) => {
  return (
    <>
      <Switch id='doctor-mode' checked={isDoctor} onCheckedChange={handleSwitchUser} />
      <Label htmlFor='doctor-mode'>医者モード</Label>
    </>
  );
};

export default SwitchUser;
