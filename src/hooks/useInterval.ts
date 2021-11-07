import React, { useState, useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number) {

  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current()
    if (typeof delay === 'number') {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}