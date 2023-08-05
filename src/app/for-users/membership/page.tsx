import React from 'react';
import { servicePaid, servicePriceList } from '@/common/config/site.config';
import { PriceCard, LineButton } from '@/components/client/atoms';
import { StatePlan } from '@/components/client/organisms';

export default function Paid() {
  return (
    <div>
      <div>
        <StatePlan text='現在のプラン' />
      </div>
      <div>
        <h1>{servicePaid.title1}</h1>
        <p>{servicePaid.description1}</p>
        <p>{servicePaid.description2}</p>
      </div>
      <div>
        <div>
          <h2>{servicePaid.title2}</h2>
        </div>
        <div>
          {servicePriceList.list.map((list) => (
            <div key={list.text}>
              <PriceCard text={list.text} price={list.price} />
            </div>
          ))}
        </div>
        <div>
          <div>
            <h2>{servicePaid.line}</h2>
          </div>
          <div>
            <LineButton />
          </div>
        </div>
      </div>
    </div>
  );
}
